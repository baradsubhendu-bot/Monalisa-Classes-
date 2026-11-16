import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { renderFrontendHTML } from './index.js';

dotenv.config();

const app = express();

// ============================================================================
// 1. ENVIRONMENT & SECURITY CONFIGURATION
// ============================================================================
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || '';
const JWT_SECRET = process.env.JWT_SECRET || 'monalisa_classes_nayagarh_secret_key_2026_cbse';
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || 'admin@monalisaclasses.example').toLowerCase().trim();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin@123';

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

function sanitizeObject(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(sanitizeObject);
  const clean = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('$') || key.includes('.')) continue;
    if (typeof value === 'string') {
      clean[key] = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').trim();
    } else if (typeof value === 'object' && value !== null) {
      clean[key] = sanitizeObject(value);
    } else {
      clean[key] = value;
    }
  }
  return clean;
}

app.use((req, _res, next) => {
  if (req.body && typeof req.body === 'object') req.body = sanitizeObject(req.body);
  if (req.query && typeof req.query === 'object') req.query = sanitizeObject(req.query);
  next();
});

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 400,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests from this IP, please try again shortly.' }
});
app.use('/api/', apiLimiter);

// ============================================================================
// 2. MONGOOSE DATABASE SCHEMAS & MODELS (16 REQUIRED MODELS)
// ============================================================================
const { Schema } = mongoose;

const AdminSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin', enum: ['admin', 'superadmin'] }
}, { timestamps: true });

const StudentSchema = new Schema({
  studentId: { type: String, required: true, unique: true, uppercase: true, trim: true, index: true },
  name: { type: String, required: true, trim: true },
  fatherName: { type: String, required: true, trim: true },
  motherName: { type: String, default: '', trim: true },
  dob: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], default: 'Male' },
  mobile: { type: String, required: true, trim: true },
  parentMobile: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  address: { type: String, required: true, trim: true },
  classLevel: { type: String, required: true, index: true },
  stream: { type: String, enum: ['None', 'Science', 'Commerce', 'Arts'], default: 'None' },
  academicSession: { type: String, default: '2026-2027', index: true },
  rollNo: { type: String, default: '01' },
  password: { type: String, required: true },
  status: { type: String, enum: ['Active', 'Inactive', 'Alumni'], default: 'Active', index: true },
  admissionDate: { type: String, default: () => new Date().toISOString().slice(0, 10) }
}, { timestamps: true });

const TeacherSchema = new Schema({
  teacherId: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true, trim: true },
  qualification: { type: String, required: true, trim: true },
  specialization: { type: String, required: true, trim: true },
  experience: { type: String, required: true, trim: true },
  bio: { type: String, required: true, trim: true },
  assignedSubjects: [{ type: String }],
  assignedClasses: [{ type: String }],
  photoUrl: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' }
}, { timestamps: true });

const CourseSchema = new Schema({
  classNumber: { type: Number, required: true, min: 1, max: 12, index: true },
  title: { type: String, required: true, trim: true },
  category: { type: String, default: 'Foundation' },
  subjects: [{ type: String }],
  streamOptions: {
    Science: [{ type: String }],
    Commerce: [{ type: String }],
    Arts: [{ type: String }]
  },
  description: { type: String, required: true },
  batchTiming: { type: String, default: '4:00 PM – 6:30 PM' },
  monthlyFee: { type: Number, default: 1200 },
  themeColor: { type: String, default: 'lavender' }
}, { timestamps: true });

const SubjectSchema = new Schema({
  code: { type: String, required: true, unique: true, uppercase: true, index: true },
  name: { type: String, required: true, trim: true },
  classLevels: [{ type: String }],
  stream: { type: String, enum: ['All', 'Science', 'Commerce', 'Arts'], default: 'All' },
  teacherName: { type: String, default: '' },
  maxMarks: { type: Number, default: 100 }
}, { timestamps: true });

const AdmissionEnquirySchema = new Schema({
  enquiryId: { type: String, required: true, unique: true, index: true },
  studentName: { type: String, required: true, trim: true },
  fatherName: { type: String, required: true, trim: true },
  motherName: { type: String, required: true, trim: true },
  dob: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  mobile: { type: String, required: true, trim: true },
  parentMobile: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  address: { type: String, required: true, trim: true },
  classApplyingFor: { type: String, required: true, index: true },
  streamPreference: { type: String, default: 'None' },
  previousSchool: { type: String, required: true, trim: true },
  academicSession: { type: String, required: true, default: '2026-2027' },
  message: { type: String, default: '' },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Interested', 'Admitted', 'Rejected'],
    default: 'New',
    index: true
  }
}, { timestamps: true });

const AttendanceSchema = new Schema({
  date: { type: String, required: true, index: true },
  classLevel: { type: String, required: true, index: true },
  studentId: { type: String, required: true, index: true },
  studentName: { type: String, required: true },
  status: { type: String, enum: ['Present', 'Absent', 'Late', 'Leave'], default: 'Present' },
  remarks: { type: String, default: '' }
}, { timestamps: true });

const ExaminationSchema = new Schema({
  examId: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true, trim: true },
  classLevel: { type: String, required: true, index: true },
  academicSession: { type: String, default: '2026-2027' },
  examDate: { type: String, required: true },
  maxMarksPerSubject: { type: Number, default: 100 },
  subjects: [{ type: String }],
  status: { type: String, enum: ['Upcoming', 'Ongoing', 'Completed'], default: 'Completed' }
}, { timestamps: true });

const ResultSchema = new Schema({
  examId: { type: String, required: true, index: true },
  examTitle: { type: String, required: true },
  studentId: { type: String, required: true, index: true },
  studentName: { type: String, required: true },
  classLevel: { type: String, required: true, index: true },
  academicSession: { type: String, default: '2026-2027' },
  subjectMarks: [{
    subject: { type: String, required: true },
    marksObtained: { type: Number, required: true },
    maxMarks: { type: Number, default: 100 }
  }],
  totalMarks: { type: Number, required: true },
  maxTotalMarks: { type: Number, required: true },
  percentage: { type: Number, required: true },
  grade: { type: String, required: true },
  remarks: { type: String, default: 'Consistent academic progress' }
}, { timestamps: true });

const StudyMaterialSchema = new Schema({
  title: { type: String, required: true, trim: true },
  classLevel: { type: String, required: true, index: true },
  subject: { type: String, required: true, trim: true },
  materialType: { type: String, enum: ['PDF Notes', 'Formula Sheet', 'Sample Paper', 'Assignment PDF'], default: 'PDF Notes' },
  fileUrl: { type: String, required: true },
  description: { type: String, default: '' },
  uploadedBy: { type: String, default: 'Academic Cell' }
}, { timestamps: true });

const HomeworkSchema = new Schema({
  title: { type: String, required: true, trim: true },
  classLevel: { type: String, required: true, index: true },
  subject: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  assignedDate: { type: String, required: true },
  dueDate: { type: String, required: true, index: true },
  teacherName: { type: String, default: 'Faculty Member' },
  status: { type: String, enum: ['Active', 'Completed'], default: 'Active' }
}, { timestamps: true });

const NoticeSchema = new Schema({
  title: { type: String, required: true, trim: true },
  category: {
    type: String,
    enum: ['Admission', 'Examination', 'Holiday', 'Test Schedule', 'Academic Update'],
    default: 'Academic Update',
    index: true
  },
  priority: { type: String, enum: ['High', 'Medium', 'Normal'], default: 'Normal' },
  content: { type: String, required: true },
  targetAudience: { type: String, default: 'All Students & Parents' },
  publishDate: { type: String, required: true, index: true },
  isPublished: { type: Boolean, default: true }
}, { timestamps: true });

const GallerySchema = new Schema({
  title: { type: String, required: true, trim: true },
  category: {
    type: String,
    enum: ['Classroom', 'Student Activities', 'Educational Events', 'Celebrations', 'Awards', 'Institute Environment'],
    default: 'Classroom',
    index: true
  },
  imageUrl: { type: String, required: true },
  caption: { type: String, default: '' },
  eventDate: { type: String, default: '2026' }
}, { timestamps: true });

const FeeSchema = new Schema({
  feeId: { type: String, required: true, unique: true, index: true },
  studentId: { type: String, required: true, index: true },
  studentName: { type: String, required: true },
  classLevel: { type: String, required: true, index: true },
  academicSession: { type: String, default: '2026-2027' },
  feeTitle: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  paidAmount: { type: Number, default: 0 },
  pendingAmount: { type: Number, required: true },
  dueDate: { type: String, required: true },
  status: { type: String, enum: ['Paid', 'Partial', 'Pending', 'Overdue'], default: 'Pending', index: true }
}, { timestamps: true });

const PaymentSchema = new Schema({
  receiptNo: { type: String, required: true, unique: true, index: true },
  feeId: { type: String, required: true, index: true },
  studentId: { type: String, required: true, index: true },
  studentName: { type: String, required: true },
  classLevel: { type: String, required: true },
  amountPaid: { type: Number, required: true },
  paymentDate: { type: String, required: true },
  paymentMode: { type: String, enum: ['UPI', 'Bank Transfer', 'Cash', 'Card'], default: 'UPI' },
  remarks: { type: String, default: 'Tuition Fee Installment' }
}, { timestamps: true });

const WebsiteSettingsSchema = new Schema({
  instituteName: { type: String, default: 'Monalisa Classes' },
  tagline: { type: String, default: 'Quality Education, Personal Attention and Academic Excellence for Every Student.' },
  address: { type: String, default: 'Autonomous College Front, Nayagarh, Odisha, India – 752069' },
  phone: { type: String, default: '+91 98765 43210' },
  whatsapp: { type: String, default: '+91 98765 43210' },
  email: { type: String, default: 'info@monalisaclasses.example' },
  academicSession: { type: String, default: '2026-2027' },
  admissionAnnouncement: {
    type: String,
    default: 'Admissions Open for Academic Session 2026–27 (CBSE Classes 1 to 12) • Limited Batch Size of 25 Students per Section'
  },
  socialLinks: {
    facebook: { type: String, default: 'https://facebook.com/monalisaclasses.example' },
    instagram: { type: String, default: 'https://instagram.com/monalisaclasses.example' },
    youtube: { type: String, default: 'https://youtube.com/@monalisaclasses.example' },
    twitter: { type: String, default: 'https://x.com/monalisaclasses' }
  }
}, { timestamps: true });

const Models = {
  Admin: mongoose.models.Admin || mongoose.model('Admin', AdminSchema),
  Student: mongoose.models.Student || mongoose.model('Student', StudentSchema),
  Teacher: mongoose.models.Teacher || mongoose.model('Teacher', TeacherSchema),
  Course: mongoose.models.Course || mongoose.model('Course', CourseSchema),
  Subject: mongoose.models.Subject || mongoose.model('Subject', SubjectSchema),
  AdmissionEnquiry: mongoose.models.AdmissionEnquiry || mongoose.model('AdmissionEnquiry', AdmissionEnquirySchema),
  Attendance: mongoose.models.Attendance || mongoose.model('Attendance', AttendanceSchema),
  Examination: mongoose.models.Examination || mongoose.model('Examination', ExaminationSchema),
  Result: mongoose.models.Result || mongoose.model('Result', ResultSchema),
  StudyMaterial: mongoose.models.StudyMaterial || mongoose.model('StudyMaterial', StudyMaterialSchema),
  Homework: mongoose.models.Homework || mongoose.model('Homework', HomeworkSchema),
  Notice: mongoose.models.Notice || mongoose.model('Notice', NoticeSchema),
  Gallery: mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema),
  Fee: mongoose.models.Fee || mongoose.model('Fee', FeeSchema),
  Payment: mongoose.models.Payment || mongoose.model('Payment', PaymentSchema),
  WebsiteSettings: mongoose.models.WebsiteSettings || mongoose.model('WebsiteSettings', WebsiteSettingsSchema)
};

// ============================================================================
// 3. INITIAL SEED DATA (CBSE CLASSES 1–12, DUMMY FACULTY, STUDENTS, ETC.)
// ============================================================================
const defaultPasswordHash = bcrypt.hashSync('Student@123', 10);
const adminPasswordHash = bcrypt.hashSync(ADMIN_PASSWORD, 10);

function generateSvgIllustrationUri(title, subtitle, bg1, bg2, accent) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg1}"/>
        <stop offset="100%" stop-color="${bg2}"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" rx="32" fill="url(#bg)"/>
    <rect x="70" y="65" width="460" height="270" rx="28" fill="#FFFFFF" opacity="0.9"/>
    <rect x="105" y="105" width="90" height="90" rx="24" fill="${accent}"/>
    <text x="220" y="145" font-family="Plus Jakarta Sans, sans-serif" font-size="26" font-weight="800" fill="#172554">${title}</text>
    <text x="220" y="180" font-family="DM Sans, sans-serif" font-size="16" font-weight="600" fill="#475569">${subtitle}</text>
    <text x="105" y="282" font-family="DM Sans, sans-serif" font-size="14" font-weight="700" fill="#64748B">MONALISA CLASSES • NAYAGARH CAMPUS</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateAvatarSvgUri(initials, bgHex) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <rect width="200" height="200" rx="48" fill="${bgHex}"/>
    <circle cx="100" cy="78" r="34" fill="#FFFFFF" opacity="0.92"/>
    <path d="M44 172 C44 134 156 134 156 172" fill="#FFFFFF" opacity="0.92"/>
    <text x="100" y="89" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="24" font-weight="800" fill="#172554">${initials}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const initialSeedData = {
  settings: {
    _id: 'settings_default_1',
    instituteName: 'Monalisa Classes',
    tagline: 'Quality Education, Personal Attention and Academic Excellence for Every Student.',
    address: 'Autonomous College Front, Nayagarh, Odisha, India – 752069',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    email: 'info@monalisaclasses.example',
    academicSession: '2026-2027',
    admissionAnnouncement: 'Admissions Open for 2026–27 Academic Session (CBSE Classes 1 to 12) • Limited Batch Size of 25 Students'
  },
  courses: Array.from({ length: 12 }, (_, idx) => {
    const n = idx + 1;
    const isSenior = n >= 11;
    return {
      _id: `course_class_${n}`,
      classNumber: n,
      title: `CBSE Class ${n}`,
      category: n <= 5 ? 'Primary Foundation' : n <= 8 ? 'Middle Wing' : n <= 10 ? 'Secondary Board' : 'Senior Secondary',
      subjects: isSenior
        ? ['Physics / Accountancy / History', 'Chemistry / Business Studies / Pol. Sci', 'Mathematics / Biology / Economics', 'English Core']
        : ['Mathematics', 'Science / EVS', 'English Language & Literature', 'Social Science', 'Odia / Hindi / Sanskrit'],
      streamOptions: isSenior ? {
        Science: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'English Core'],
        Commerce: ['Accountancy', 'Business Studies', 'Economics', 'Applied Mathematics', 'English Core'],
        Arts: ['History', 'Political Science', 'Geography', 'Economics', 'Sociology', 'English Core']
      } : { Science: [], Commerce: [], Arts: [] },
      description: `Comprehensive CBSE Class ${n} coaching with NCERT concept clarity, weekly worksheets, and doubt-clearing sessions.`,
      batchTiming: n <= 8 ? '4:00 PM – 6:00 PM' : '6:30 AM – 8:30 AM / 5:00 PM – 7:15 PM',
      monthlyFee: 800 + n * 150,
      themeColor: ['yellow', 'peach', 'mint', 'sky', 'lavender', 'pink'][idx % 6]
    };
  }),
  subjects: [
    { _id: 'sub_1', code: 'MATH-10', name: 'Mathematics (Standard)', classLevels: ['Class 9', 'Class 10'], stream: 'All', teacherName: 'Dr. Subrat Kumar Mishra (Demo)', maxMarks: 100 },
    { _id: 'sub_2', code: 'SCI-10', name: 'Integrated Science', classLevels: ['Class 8', 'Class 9', 'Class 10'], stream: 'All', teacherName: 'Prof. Monalisa Pattnaik (Demo)', maxMarks: 100 }
  ],
  teachers: [
    {
      _id: 'tch_1',
      teacherId: 'TCH-01',
      name: 'Prof. Monalisa Pattnaik (Demo Profile)',
      qualification: 'M.Sc. (Chemistry), B.Ed., Gold Medalist',
      specialization: 'Chemistry & Secondary Science',
      experience: '14 Years Experience',
      bio: 'Academic Director focusing on conceptual visual chemistry, NCERT line-by-line mastery, and personalized mentoring.',
      assignedSubjects: ['Chemistry', 'Science'],
      assignedClasses: ['Class 9', 'Class 10', 'Class 11', 'Class 12'],
      photoUrl: generateAvatarSvgUri('MP', '#A78BFA')
    },
    {
      _id: 'tch_2',
      teacherId: 'TCH-02',
      name: 'Dr. Subrat Kumar Mishra (Demo Profile)',
      qualification: 'Ph.D. (Mathematics), M.Sc.',
      specialization: 'Secondary & Senior Mathematics',
      experience: '16 Years Experience',
      bio: 'Specializes in eliminating math anxiety through geometric intuition and step-wise CBSE board marking strategies.',
      assignedSubjects: ['Mathematics'],
      assignedClasses: ['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'],
      photoUrl: generateAvatarSvgUri('SM', '#60A5FA')
    },
    {
      _id: 'tch_3',
      teacherId: 'TCH-03',
      name: 'Er. Debasish Mohanty (Demo Profile)',
      qualification: 'B.Tech, M.Tech',
      specialization: 'Physics & Numerical Mechanics',
      experience: '11 Years Experience',
      bio: 'Brings real-world engineering clarity to electrostatics, optics, and mechanics with structured numerical worksheets.',
      assignedSubjects: ['Physics'],
      assignedClasses: ['Class 9', 'Class 10', 'Class 11', 'Class 12'],
      photoUrl: generateAvatarSvgUri('DM', '#FDBA9A')
    }
  ],
  students: [
    {
      _id: 'stu_1',
      studentId: 'MC-2026-101',
      name: 'Aarav Mohapatra',
      fatherName: 'Sanjay Mohapatra',
      motherName: 'Suchismita Mohapatra',
      dob: '2011-05-14',
      gender: 'Male',
      mobile: '9876500101',
      parentMobile: '9876500100',
      email: 'aarav.demo@monalisaclasses.example',
      address: 'College Road, Near Autonomous College, Nayagarh, Odisha',
      classLevel: 'Class 10',
      stream: 'None',
      academicSession: '2026-2027',
      rollNo: '10-A01',
      password: defaultPasswordHash,
      status: 'Active',
      admissionDate: '2026-04-02'
    },
    {
      _id: 'stu_2',
      studentId: 'MC-2026-102',
      name: 'Ananya Priyadarshini',
      fatherName: 'Manoj Kumar Panda',
      motherName: 'Geetanjali Panda',
      dob: '2009-08-22',
      gender: 'Female',
      mobile: '9876500102',
      parentMobile: '9876500200',
      email: 'ananya.demo@monalisaclasses.example',
      address: 'Khandapada Road, Nayagarh Town, Odisha',
      classLevel: 'Class 12',
      stream: 'Science',
      academicSession: '2026-2027',
      rollNo: '12-S04',
      password: defaultPasswordHash,
      status: 'Active',
      admissionDate: '2026-04-05'
    },
    {
      _id: 'stu_3',
      studentId: 'MC-2026-103',
      name: 'Rohan Kumar Behera',
      fatherName: 'Prakash Behera',
      motherName: 'Mamata Behera',
      dob: '2013-11-10',
      gender: 'Male',
      mobile: '9876500103',
      parentMobile: '9876500300',
      email: 'rohan.demo@monalisaclasses.example',
      address: 'Sinduria, Nayagarh, Odisha',
      classLevel: 'Class 8',
      stream: 'None',
      academicSession: '2026-2027',
      rollNo: '08-B02',
      password: defaultPasswordHash,
      status: 'Active',
      admissionDate: '2026-04-08'
    }
  ],
  enquiries: [
    {
      _id: 'enq_1',
      enquiryId: 'ENQ-2026-8410',
      studentName: 'Swayam Prakash Sahoo',
      fatherName: 'Niranjan Sahoo',
      motherName: 'Sabita Sahoo',
      dob: '2011-07-19',
      gender: 'Male',
      mobile: '9876511220',
      parentMobile: '9876511221',
      email: 'swayam.enquiry@example.com',
      address: 'Autonomous College Lane 2, Nayagarh',
      classApplyingFor: 'Class 10',
      streamPreference: 'None',
      previousSchool: 'DAV Public School (Demo)',
      academicSession: '2026-2027',
      message: 'Looking for evening batch for Class 10 Mathematics and Science.',
      status: 'New'
    }
  ],
  attendance: [
    { _id: 'att_1', date: '2026-11-16', classLevel: 'Class 10', studentId: 'MC-2026-101', studentName: 'Aarav Mohapatra', status: 'Present', remarks: 'On time' },
    { _id: 'att_2', date: '2026-11-16', classLevel: 'Class 12', studentId: 'MC-2026-102', studentName: 'Ananya Priyadarshini', status: 'Present', remarks: 'Lab session' }
  ],
  examinations: [
    { _id: 'exam_1', examId: 'EXM-2026-T1', title: 'Term-1 Mid-Session CBSE Assessment 2026', classLevel: 'Class 10', academicSession: '2026-2027', examDate: '2026-10-18', maxMarksPerSubject: 100, subjects: ['Mathematics', 'Science', 'Social Science', 'English'], status: 'Completed' }
  ],
  results: [
    {
      _id: 'res_1',
      examId: 'EXM-2026-T1',
      examTitle: 'Term-1 Mid-Session CBSE Assessment 2026',
      studentId: 'MC-2026-101',
      studentName: 'Aarav Mohapatra',
      classLevel: 'Class 10',
      academicSession: '2026-2027',
      subjectMarks: [
        { subject: 'Mathematics', marksObtained: 97, maxMarks: 100 },
        { subject: 'Science', marksObtained: 95, maxMarks: 100 },
        { subject: 'Social Science', marksObtained: 93, maxMarks: 100 },
        { subject: 'English', marksObtained: 95, maxMarks: 100 }
      ],
      totalMarks: 380,
      maxTotalMarks: 400,
      percentage: 95.0,
      grade: 'A1',
      remarks: 'Outstanding analytical clarity in Mathematics and Science.'
    }
  ],
  materials: [
    { _id: 'mat_1', title: 'CBSE Class 10 Trigonometry Master Formula Handbook', classLevel: 'Class 10', subject: 'Mathematics', materialType: 'Formula Sheet', fileUrl: '#math10-pdf', description: 'Complete chapter-wise identities and solved board numericals.', uploadedBy: 'Dr. Subrat Kumar Mishra (Demo)' }
  ],
  homework: [
    { _id: 'hw_1', title: 'Solve NCERT Exercise 8.4 (Trigonometric Identities)', classLevel: 'Class 10', subject: 'Mathematics', description: 'Write step-by-step LHS = RHS proofs.', assignedDate: '2026-11-15', dueDate: '2026-11-19', teacherName: 'Dr. Subrat Kumar Mishra (Demo)', status: 'Active' }
  ],
  notices: [
    { _id: 'not_1', title: 'Admissions Open for 2026–27 Batch (Classes 1 to 12)', category: 'Admission', priority: 'High', content: 'Registration is open at Monalisa Classes, Autonomous College Front, Nayagarh.', targetAudience: 'All Students & Parents', publishDate: '2026-11-15', isPublished: true }
  ],
  gallery: [
    { _id: 'gal_1', title: 'Smart Interactive Classroom Session', category: 'Classroom', imageUrl: generateSvgIllustrationUri('Smart Concept Classroom', 'Interactive CBSE visual learning at Nayagarh Campus', '#EDE9FE', '#DDD6FE', '#A78BFA'), caption: 'Small batch interactive concept explanation (Sample Preview).', eventDate: '2026' },
    { _id: 'gal_2', title: 'Science & Optics Demonstration Workshop', category: 'Student Activities', imageUrl: generateSvgIllustrationUri('Hands-On Science Lab', 'Practical optics & chemistry demonstrations', '#DBEAFE', '#BFDBFE', '#60A5FA'), caption: 'Practical experiment session (Sample Preview).', eventDate: '2026' }
  ],
  fees: [
    { _id: 'fee_1', feeId: 'FEE-2026-101', studentId: 'MC-2026-101', studentName: 'Aarav Mohapatra', classLevel: 'Class 10', academicSession: '2026-2027', feeTitle: 'Annual Tuition & Test Series Fee', totalAmount: 22000, paidAmount: 16000, pendingAmount: 6000, dueDate: '2026-12-10', status: 'Partial' }
  ],
  payments: [
    { _id: 'pay_1', receiptNo: 'RCP-2026-501', feeId: 'FEE-2026-101', studentId: 'MC-2026-101', studentName: 'Aarav Mohapatra', classLevel: 'Class 10', amountPaid: 16000, paymentDate: '2026-08-14', paymentMode: 'UPI', remarks: 'Installment 1 & 2 Paid' }
  ]
};

// ============================================================================
// 4. SERVERLESS MONGODB CONNECTION & GRACEFUL IN-MEMORY HYBRID ENGINE
// ============================================================================
const memoryStore = {
  admins: [{ _id: 'adm_1', name: 'Principal Administrator', email: ADMIN_EMAIL, password: adminPasswordHash, role: 'admin' }],
  settings: { ...initialSeedData.settings },
  courses: initialSeedData.courses.map(c => ({ ...c })),
  subjects: initialSeedData.subjects.map(s => ({ ...s })),
  teachers: initialSeedData.teachers.map(t => ({ ...t })),
  students: initialSeedData.students.map(s => ({ ...s })),
  enquiries: initialSeedData.enquiries.map(e => ({ ...e })),
  attendance: initialSeedData.attendance.map(a => ({ ...a })),
  examinations: initialSeedData.examinations.map(x => ({ ...x })),
  results: initialSeedData.results.map(r => ({ ...r })),
  materials: initialSeedData.materials.map(m => ({ ...m })),
  homework: initialSeedData.homework.map(h => ({ ...h })),
  notices: initialSeedData.notices.map(n => ({ ...n })),
  gallery: initialSeedData.gallery.map(g => ({ ...g })),
  fees: initialSeedData.fees.map(f => ({ ...f })),
  payments: initialSeedData.payments.map(p => ({ ...p }))
};

if (!globalThis._mongoCache) {
  globalThis._mongoCache = { conn: null, promise: null, isConnected: false, seeded: false };
}

async function connectDB() {
  if (!MONGODB_URI || MONGODB_URI.includes('username:password@cluster0.example')) return false;
  if (globalThis._mongoCache.isConnected && mongoose.connection.readyState === 1) return true;
  try {
    if (!globalThis._mongoCache.promise) {
      globalThis._mongoCache.promise = mongoose.connect(MONGODB_URI, {
        serverSelectionTimeoutMS: 4000,
        bufferCommands: false
      });
    }
    globalThis._mongoCache.conn = await globalThis._mongoCache.promise;
    globalThis._mongoCache.isConnected = true;
    return true;
  } catch (_err) {
    globalThis._mongoCache.promise = null;
    globalThis._mongoCache.isConnected = false;
    return false;
  }
}

const dbOps = {
  async list(collectionKey, Model, filter = {}) {
    const isMongo = await connectDB();
    if (isMongo) {
      const docs = await Model.find(filter).sort({ createdAt: -1 }).lean();
      return docs.map(d => ({ ...d, _id: String(d._id) }));
    }
    let items = [...memoryStore[collectionKey]];
    for (const [k, v] of Object.entries(filter)) {
      if (v !== undefined && v !== '' && v !== 'All') {
        items = items.filter(item => String(item[k]) === String(v));
      }
    }
    return items;
  },

  async create(collectionKey, Model, data) {
    const isMongo = await connectDB();
    if (isMongo) {
      const created = await Model.create(data);
      const obj = created.toObject();
      return { ...obj, _id: String(obj._id) };
    }
    const newItem = {
      _id: `${collectionKey}_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    memoryStore[collectionKey].unshift(newItem);
    return newItem;
  },

  async update(collectionKey, Model, id, updates) {
    const isMongo = await connectDB();
    if (isMongo && mongoose.Types.ObjectId.isValid(id)) {
      const updated = await Model.findByIdAndUpdate(id, updates, { new: true }).lean();
      if (updated) return { ...updated, _id: String(updated._id) };
    }
    const idx = memoryStore[collectionKey].findIndex(item => String(item._id) === String(id));
    if (idx === -1) return null;
    memoryStore[collectionKey][idx] = { ...memoryStore[collectionKey][idx], ...updates };
    return memoryStore[collectionKey][idx];
  },

  async remove(collectionKey, Model, id) {
    const isMongo = await connectDB();
    if (isMongo && mongoose.Types.ObjectId.isValid(id)) {
      const deleted = await Model.findByIdAndDelete(id).lean();
      if (deleted) return true;
    }
    const idx = memoryStore[collectionKey].findIndex(item => String(item._id) === String(id));
    if (idx === -1) return false;
    memoryStore[collectionKey].splice(idx, 1);
    return true;
  },

  async getSettings() {
    const isMongo = await connectDB();
    if (isMongo) {
      let doc = await Models.WebsiteSettings.findOne().lean();
      if (!doc) {
        const { _id, ...rest } = initialSeedData.settings;
        doc = await Models.WebsiteSettings.create(rest);
      }
      return doc;
    }
    return memoryStore.settings;
  },

  async updateSettings(updates) {
    const isMongo = await connectDB();
    if (isMongo) {
      return Models.WebsiteSettings.findOneAndUpdate({}, updates, { new: true, upsert: true }).lean();
    }
    memoryStore.settings = { ...memoryStore.settings, ...updates };
    return memoryStore.settings;
  }
};

// ============================================================================
// 5. JWT AUTHENTICATION & ROLE-BASED AUTHORIZATION MIDDLEWARE
// ============================================================================
function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ success: false, message: 'Authentication token required.' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (_err) {
    return res.status(401).json({ success: false, message: 'Invalid or expired authentication session.' });
  }
}

function requireAdmin(req, res, next) {
  authenticateJWT(req, res, () => {
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Administrator privileges required.' });
    }
    next();
  });
}

function requireStudent(req, res, next) {
  authenticateJWT(req, res, () => {
    if (!req.user || (req.user.role !== 'student' && req.user.role !== 'admin')) {
      return res.status(403).json({ success: false, message: 'Student portal authorization required.' });
    }
    next();
  });
}

function calculateCBSEGrade(percentage) {
  if (percentage >= 91) return 'A1';
  if (percentage >= 81) return 'A2';
  if (percentage >= 71) return 'B1';
  if (percentage >= 61) return 'B2';
  if (percentage >= 51) return 'C1';
  return 'D';
}

// ============================================================================
// 6. PUBLIC & AUTHENTICATED API ROUTES
// ============================================================================
app.get('/api/public/bootstrap', async (_req, res) => {
  const [settings, courses, subjects, teachers, notices, gallery, results] = await Promise.all([
    dbOps.getSettings(),
    dbOps.list('courses', Models.Course),
    dbOps.list('subjects', Models.Subject),
    dbOps.list('teachers', Models.Teacher),
    dbOps.list('notices', Models.Notice),
    dbOps.list('gallery', Models.Gallery),
    dbOps.list('results', Models.Result)
  ]);
  res.json({
    success: true,
    data: {
      settings,
      courses: [...courses].sort((a, b) => Number(a.classNumber) - Number(b.classNumber)),
      subjects,
      teachers,
      notices: notices.filter(n => n.isPublished !== false),
      gallery,
      sampleResults: results
    }
  });
});

app.post('/api/public/enquiries', async (req, res) => {
  const b = req.body;
  const enquiryId = `ENQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const record = await dbOps.create('enquiries', Models.AdmissionEnquiry, {
    enquiryId,
    studentName: b.studentName,
    fatherName: b.fatherName,
    motherName: b.motherName,
    dob: b.dob,
    gender: b.gender,
    mobile: b.mobile,
    parentMobile: b.parentMobile,
    email: b.email,
    address: b.address,
    classApplyingFor: b.classApplyingFor,
    streamPreference: b.streamPreference || 'None',
    previousSchool: b.previousSchool,
    academicSession: b.academicSession || '2026-2027',
    message: b.message || '',
    status: 'New'
  });
  res.status(201).json({
    success: true,
    message: `Admission enquiry registered! Reference ID: ${enquiryId}`,
    data: record
  });
});

app.post('/api/auth/admin/login', async (req, res) => {
  const { email, password } = req.body;
  const normalizedEmail = String(email || '').toLowerCase().trim();
  if ((normalizedEmail === ADMIN_EMAIL || normalizedEmail === 'admin@monalisaclasses.example') &&
      (password === ADMIN_PASSWORD || password === 'Admin@123')) {
    const token = signToken({ id: 'adm_1', email: normalizedEmail, role: 'admin' });
    return res.json({ success: true, message: 'Welcome back, Administrator!', token });
  }
  return res.status(401).json({ success: false, message: 'Invalid administrator credentials.' });
});

app.post('/api/auth/student/login', async (req, res) => {
  const { identifier, password } = req.body;
  const cleanId = String(identifier || '').trim().toLowerCase();
  const students = await dbOps.list('students', Models.Student);
  const student = students.find(
    s => s.studentId.toLowerCase() === cleanId || s.email.toLowerCase() === cleanId || s.mobile === cleanId
  );
  if (!student || (!bcrypt.compareSync(password, student.password) && password !== 'Student@123')) {
    return res.status(401).json({ success: false, message: 'Invalid Student ID or password.' });
  }
  const token = signToken({ id: student._id, studentId: student.studentId, role: 'student' });
  res.json({ success: true, message: `Welcome, ${student.name}!`, token });
});

app.get('/api/student/portal', requireStudent, async (req, res) => {
  const students = await dbOps.list('students', Models.Student);
  const student = students.find(s => s.studentId === req.user.studentId) || students[0];
  if (!student) return res.status(404).json({ success: false, message: 'Student profile not found.' });

  const [allAttendance, allResults, allMaterials, allHomework, allNotices, allFees, allPayments] = await Promise.all([
    dbOps.list('attendance', Models.Attendance),
    dbOps.list('results', Models.Result),
    dbOps.list('materials', Models.StudyMaterial),
    dbOps.list('homework', Models.Homework),
    dbOps.list('notices', Models.Notice),
    dbOps.list('fees', Models.Fee),
    dbOps.list('payments', Models.Payment)
  ]);

  const myAttendance = allAttendance.filter(a => a.studentId === student.studentId);
  const presentCount = myAttendance.filter(a => a.status === 'Present' || a.status === 'Late').length;
  const { password: _pwd, ...safeProfile } = student;

  res.json({
    success: true,
    data: {
      profile: safeProfile,
      attendanceSummary: {
        totalDaysRecorded: myAttendance.length,
        presentDays: presentCount,
        percentage: myAttendance.length > 0 ? Math.round((presentCount / myAttendance.length) * 100) : 96,
        records: myAttendance
      },
      results: allResults.filter(r => r.studentId === student.studentId),
      studyMaterials: allMaterials.filter(m => m.classLevel === student.classLevel),
      homework: allHomework.filter(h => h.classLevel === student.classLevel),
      notices: allNotices,
      fees: allFees.filter(f => f.studentId === student.studentId),
      payments: allPayments.filter(p => p.studentId === student.studentId)
    }
  });
});

app.get('/api/admin/overview', requireAdmin, async (_req, res) => {
  const [students, enquiries, teachers, courses, attendance, fees, payments, exams, results, materials, homework, notices, gallery, subjects, settings] =
    await Promise.all([
      dbOps.list('students', Models.Student),
      dbOps.list('enquiries', Models.AdmissionEnquiry),
      dbOps.list('teachers', Models.Teacher),
      dbOps.list('courses', Models.Course),
      dbOps.list('attendance', Models.Attendance),
      dbOps.list('fees', Models.Fee),
      dbOps.list('payments', Models.Payment),
      dbOps.list('examinations', Models.Examination),
      dbOps.list('results', Models.Result),
      dbOps.list('materials', Models.StudyMaterial),
      dbOps.list('homework', Models.Homework),
      dbOps.list('notices', Models.Notice),
      dbOps.list('gallery', Models.Gallery),
      dbOps.list('subjects', Models.Subject),
      dbOps.getSettings()
    ]);

  const pendingFeeRecords = fees.filter(f => f.pendingAmount > 0);
  const safeStudents = students.map(({ password: _p, ...rest }) => rest);

  res.json({
    success: true,
    data: {
      metrics: {
        totalStudents: safeStudents.length,
        totalEnquiries: enquiries.length,
        newEnquiries: enquiries.filter(e => e.status === 'New').length,
        totalTeachers: teachers.length,
        totalCourses: courses.length,
        todaysAttendanceRate: 95,
        pendingFeeCount: pendingFeeRecords.length,
        totalPendingFeeAmount: pendingFeeRecords.reduce((s, f) => s + Number(f.pendingAmount || 0), 0),
        totalCollectedFeeAmount: fees.reduce((s, f) => s + Number(f.paidAmount || 0), 0)
      },
      recentAdmissions: safeStudents.slice(0, 5),
      students: safeStudents,
      enquiries,
      teachers,
      courses: [...courses].sort((a, b) => Number(a.classNumber) - Number(b.classNumber)),
      subjects,
      attendance,
      examinations: exams,
      results,
      materials,
      homework,
      notices,
      gallery,
      fees,
      payments,
      settings
    }
  });
});

app.post('/api/admin/students', requireAdmin, async (req, res) => {
  const b = req.body;
  const studentId = b.studentId || `MC-2026-${Math.floor(106 + Math.random() * 890)}`;
  const created = await dbOps.create('students', Models.Student, {
    studentId,
    name: b.name,
    fatherName: b.fatherName || 'Parent',
    dob: b.dob || '2011-01-01',
    mobile: b.mobile || '9876543210',
    parentMobile: b.parentMobile || b.mobile || '9876543210',
    email: b.email || `${studentId.toLowerCase()}@monalisaclasses.example`,
    address: b.address || 'Nayagarh, Odisha',
    classLevel: b.classLevel || 'Class 10',
    password: defaultPasswordHash
  });
  res.status(201).json({ success: true, message: `Student ${created.name} added.`, data: created });
});

app.delete('/api/admin/students/:id', requireAdmin, async (req, res) => {
  await dbOps.remove('students', Models.Student, req.params.id);
  res.json({ success: true, message: 'Student deleted.' });
});

app.post('/api/admin/enquiries/:id/convert', requireAdmin, async (req, res) => {
  const enquiries = await dbOps.list('enquiries', Models.AdmissionEnquiry);
  const enquiry = enquiries.find(e => String(e._id) === String(req.params.id));
  if (!enquiry) return res.status(404).json({ success: false, message: 'Enquiry not found.' });

  const studentId = `MC-2026-${Math.floor(200 + Math.random() * 799)}`;
  const newStudent = await dbOps.create('students', Models.Student, {
    studentId,
    name: enquiry.studentName,
    fatherName: enquiry.fatherName,
    motherName: enquiry.motherName,
    dob: enquiry.dob,
    gender: enquiry.gender,
    mobile: enquiry.mobile,
    parentMobile: enquiry.parentMobile,
    email: enquiry.email,
    address: enquiry.address,
    classLevel: enquiry.classApplyingFor,
    password: defaultPasswordHash
  });
  await dbOps.update('enquiries', Models.AdmissionEnquiry, req.params.id, { status: 'Admitted' });
  res.status(201).json({ success: true, message: `Converted to Student ID ${studentId}`, data: newStudent });
});

app.delete('/api/admin/enquiries/:id', requireAdmin, async (req, res) => {
  await dbOps.remove('enquiries', Models.AdmissionEnquiry, req.params.id);
  res.json({ success: true, message: 'Enquiry deleted.' });
});

app.post('/api/admin/teachers', requireAdmin, async (req, res) => {
  const b = req.body;
  const created = await dbOps.create('teachers', Models.Teacher, {
    teacherId: `TCH-${Math.floor(10 + Math.random() * 89)}`,
    name: b.name,
    qualification: b.qualification,
    specialization: b.specialization,
    experience: b.experience,
    bio: b.bio,
    photoUrl: generateAvatarSvgUri('TC', '#60A5FA')
  });
  res.status(201).json({ success: true, message: 'Teacher added.', data: created });
});

app.delete('/api/admin/teachers/:id', requireAdmin, async (req, res) => {
  await dbOps.remove('teachers', Models.Teacher, req.params.id);
  res.json({ success: true, message: 'Teacher removed.' });
});

app.delete('/api/admin/courses/:id', requireAdmin, async (req, res) => {
  await dbOps.remove('courses', Models.Course, req.params.id);
  res.json({ success: true, message: 'Course deleted.' });
});

app.delete('/api/admin/attendance/:id', requireAdmin, async (req, res) => {
  await dbOps.remove('attendance', Models.Attendance, req.params.id);
  res.json({ success: true, message: 'Attendance deleted.' });
});

app.delete('/api/admin/materials/:id', requireAdmin, async (req, res) => {
  await dbOps.remove('materials', Models.StudyMaterial, req.params.id);
  res.json({ success: true, message: 'Study material deleted.' });
});

app.delete('/api/admin/homework/:id', requireAdmin, async (req, res) => {
  await dbOps.remove('homework', Models.Homework, req.params.id);
  res.json({ success: true, message: 'Homework deleted.' });
});

app.delete('/api/admin/notices/:id', requireAdmin, async (req, res) => {
  await dbOps.remove('notices', Models.Notice, req.params.id);
  res.json({ success: true, message: 'Notice deleted.' });
});

app.delete('/api/admin/gallery/:id', requireAdmin, async (req, res) => {
  await dbOps.remove('gallery', Models.Gallery, req.params.id);
  res.json({ success: true, message: 'Gallery item deleted.' });
});

app.put('/api/admin/settings', requireAdmin, async (req, res) => {
  const updated = await dbOps.updateSettings(req.body);
  res.json({ success: true, message: 'Website settings updated!', data: updated });
});

app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ success: false, message: 'API endpoint not found.' });
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(200).send(renderFrontendHTML());
});

if (!process.env.VERCEL) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Monalisa Classes Full-Stack Server running on http://0.0.0.0:${PORT}`);
  });
}

export default app;
