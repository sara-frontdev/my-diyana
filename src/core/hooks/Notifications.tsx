import { notification, NotificationArgsProps } from "antd";

export const ShowToast = (
  message: string[],
  type: "warning" | "info" | "success" | "error",
  description?: string,
  placement?: NotificationArgsProps["placement"],
  duration?: number
) => {
  // time
  let durationPerWord = 0;

  // محاسبه زمان تقریبی خواندن یک متن بر اساس تعداد کلمات آن نوشته شده است
  function readTimeFun(text: string[]): number {
    return text[0].split(" ").length * 0.5;
  }
  durationPerWord = readTimeFun(message);

  notification.open({
    message,
    type,
    description,

    placement: placement || "bottomLeft",

    duration: duration || durationPerWord,

    className: ` rounded-lg  ${
      type === "error"
        ? "bg-red-200"
        : type === "info"
        ? "bg-sky-200"
        : type == "success"
        ? "bg-green-200"
        : type === "warning"
        ? "bg-orange-200"
        : undefined
    }`,
  });
};
