import moment from "moment-jalaali"; // تاریخ شمسی

export interface ILessonSession {
  date: string;
  day: number;
}

export const generateLessonDates = (
  startDate: string, //تاریخ شروع کلاس
  selectedDays: number[], //ارایه ایبک اند برایما میقرسته و انتخابکرده
  countClass: number // تعداد جلساتی که باید ساخته شود
): ILessonSession[] => {
  const result: ILessonSession[] = []; //ذخیره جبسات نهایی

  let date = moment(startDate, "jYYYY/jMM/jDD").add(1, "days");

  while (result.length < countClass * 2) {
    const gregorianDay = date.day(); //مقدار میلادی روز هفته(0-6)

    const jalaliDay = ((gregorianDay + 1) % 7) + 1; // شمسی معادلش

    if (selectedDays.includes(jalaliDay)) {
      result.push({
        date: date.format("jYYYY/jMM/jDD"),
        day: jalaliDay, // حالا خروجی کاملاً با enum های تو مچ هست
      });
    }

    date = date.add(1, "day");
  }

  return result;
};

//----------
//----------
//----------

// moment-jalaali اینجا می‌فهمه که این یک تاریخ شمسی (هجری شمسی) هست.
// خودش تبدیلش می‌کنه به معادل میلادی داخل حافظه‌ی
// moment.

//  (format("jYYYY/jMM/jDD"))
// ولی خروجی  دوباره به شمسی میده

// تو دادی: "1403/02/19" (شمسی)
// moment تبدیل کرد به: 2024-05-08 (میلادی)
// وقتی گفتی "jYYYY/jMM/jDD" بده، دوباره شمسی نشون داد
