/* ==========================================================
   DỮ LIỆU WEBSITE – sửa ở đây là cập nhật trên mọi trang.
   ========================================================== */

window.SITE = {
  name: 'Đổng Minh Thiện English',
  slogan: 'Bring English into Life',
  address: '24/42/4 Nguyễn Văn Cừ, P. Cầu Ông Lãnh, TP.HCM',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=24%2F42%2F4+Nguy%E1%BB%85n+V%C4%83n+C%E1%BB%AB%2C+C%E1%BA%A7u+%C3%94ng+L%C3%A3nh%2C+TP.HCM',
  hotlines: ['0973 767 055', '0909 458 918'],
  email: 'dongminhthienenglish@gmail.com',
  facebook: 'https://facebook.com/dongminhthienenglish',
  threads: 'https://www.threads.com/@dmt_eng',
  tiktok: 'https://www.tiktok.com/@dongminhthienenglish',
  zalo: 'https://zalo.me/0909458918',
  youtube: 'https://www.youtube.com/@dongminhthienenglish',
  /* Trang đăng ký nằm ngay trên web (form Tally được nhúng bên trong) */
  formTuVan: 'tu-van.html',
  formTest: 'test-trinh-do.html',
  tallyTuVan: 'Zj4DE5',
  tallyTest: 'rj7OPp'
};

/* Các con số nổi bật */
window.STATS = [
  { value: '8.5', label: 'IELTS cao nhất học viên từng đạt' },
  { value: '70%', label: 'học viên tốt nghiệp 2024–2025 đạt IELTS 7.0–7.5' },
  { value: '10+', label: 'quốc gia học viên đã nộp hồ sơ du học, định cư thành công' },
  { value: '80%', label: 'học viên đến từ lời giới thiệu của cựu học viên' }
];

/* Chương trình BEACH */
window.COURSES = [
  {
    letter: 'B', name: 'BEGINNING', short: 'Lấy lại gốc',
    desc: 'Trồng lại “gốc” tiếng Anh cho các bạn “mất gốc”',
    forWho: 'Bạn nghĩ mình đã “mất gốc”, quên gần hết kiến thức và ngại bắt đầu lại.',
    learn: ['Ngữ pháp nền tảng, học lại từ cấu trúc câu cơ bản', 'Từ vựng thông dụng theo chủ đề gần gũi', 'Phát âm chuẩn ngay từ đầu'],
    how: ['Đi từ dễ đến khó, không dồn kiến thức', 'Luyện tập ngay trên lớp sau mỗi phần', 'Lớp dưới 10 học viên, thầy theo sát từng bạn']
  },
  {
    letter: 'E', name: 'ENHANCING', short: 'Cơ bản → học thuật',
    desc: 'Tiếng Anh cơ bản – nâng cao – học thuật',
    forWho: 'Bạn đã có nền cơ bản, muốn nâng lên trình độ cao hơn và làm quen tiếng Anh học thuật.',
    learn: ['Nâng cấp ngữ pháp và từ vựng lên trình độ cao', 'Tiếng Anh học thuật: đọc hiểu và viết luận', 'Tư duy ngôn ngữ: chuyển từ người học sang người sử dụng'],
    how: ['Thực hành nói và viết thường xuyên', 'Luyện tư duy logic qua từng bài học', 'Nhận phản hồi trực tiếp từ giảng viên']
  },
  {
    letter: 'A', name: 'ADVANCING', short: 'Luyện thi IELTS',
    desc: 'Luyện thi IELTS: kỹ năng xử lý đề thi',
    forWho: 'Bạn cần IELTS cho du học, định cư, tốt nghiệp hoặc công việc.',
    learn: ['Kỹ năng xử lý từng dạng đề ở cả 4 kỹ năng', 'Chiến thuật làm bài và quản lý thời gian', 'Làm mock test sát đề thi thật'],
    how: ['Sửa bài chi tiết theo tiêu chí chấm', 'Lộ trình cá nhân hóa, không kéo dài', 'Hỗ trợ tư vấn du học, định cư']
  },
  {
    letter: 'C', name: 'CHALLENGING', short: 'Khóa ngắn hạn',
    desc: 'Khóa ngắn hạn: Tiếng Anh chuyên ngành và Tiếng Anh thương mại',
    forWho: 'Bạn đi làm hoặc học chuyên ngành, cần một khóa ngắn hạn để dùng tiếng Anh cho mục tiêu cụ thể.',
    learn: ['Khóa ngắn hạn Tiếng Anh chuyên ngành theo lĩnh vực của bạn', 'Khóa ngắn hạn Tiếng Anh thương mại cho môi trường công việc', 'Các khóa ngắn hạn khác'],
    how: ['Nội dung bám sát công việc thực tế', 'Thời lượng ngắn hạn, tập trung đúng mục tiêu', 'Hỗ trợ tư vấn hướng nghiệp']
  },
  {
    letter: 'H', name: 'HEALING', short: 'Giao tiếp & duy trì',
    desc: 'Tiếng Anh giao tiếp và duy trì thói quen sử dụng tiếng Anh',
    forWho: 'Bạn muốn tự tin giao tiếp, từng có trải nghiệm học tiếng Anh không vui, hoặc muốn giữ tiếng Anh không bị mai một.',
    learn: ['Tiếng Anh giao tiếp trong các tình huống hằng ngày', 'Chữa lành “trauma” với tiếng Anh', 'Duy trì thói quen sử dụng tiếng Anh trong môi trường tự nhiên, thoải mái'],
    how: ['Không áp lực điểm số', 'Trò chuyện, giao tiếp là chính', 'Đề cao tính cách cá nhân của từng bạn']
  }
];

/* Thành tích học viên – thêm học viên mới bằng cách thêm một dòng (web tự xếp điểm từ cao xuống thấp) */
window.STUDENTS = [
  { name: 'Nguyễn Chấn Ninh', ielts: '8.0', job: 'Motion Designer tại Úc' },
  { name: 'Trương Minh Thông', ielts: '8.0', job: 'Bác sĩ tại Anh' },
  { name: 'Nguyễn Triều Tiên', ielts: '8.0', job: 'Giáo viên tiếng Anh' },
  { name: 'Nguyễn Hoa Hạnh Duyên', ielts: '7.5', job: 'Du học sinh Mỹ' },
  { name: 'Phạm Thị Minh Hậu', ielts: '7.5', job: 'Luật sư' },
  { name: 'Nguyễn Huy Đức', ielts: '7.5', job: 'Học sinh THPT chuyên Lê Hồng Phong' },
  { name: 'Nguyễn Hải Cơ', ielts: '7.0', job: 'Nghiên cứu sinh tiến sĩ tại Thụy Điển' },
  { name: 'Nguyễn Quang Minh', ielts: '7.0', job: 'Học sinh THPT Nam Sài Gòn' },
  { name: 'Phạm Hoàng Gia Huy', ielts: '7.0', job: 'Sinh viên cao học tại Mỹ' },
  { name: 'Phạm Minh Nhật', ielts: '7.0', job: 'Du học sinh Úc' }
];
