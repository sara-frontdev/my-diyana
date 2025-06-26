import { envConfig } from "@/configs/env.config";
import { IGetCostLessonAttributesForCourseUnitSelectPayload } from "@/core/types/payload/CostLessonAttribute.payload";

export const GetCostLessonAttributesForCourseUnitSelect = async (
  payload: IGetCostLessonAttributesForCourseUnitSelectPayload
): Promise<any | null> => {
  try {
    const response = await fetch(
      envConfig.base_url +
        "/api/CostLessonAttribute/GetCostLessonAttributesForCourseUnitSelect",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        next: { revalidate: 60 * 60 * 24 * 30 * 6 }, // کش 6 ماهه
      }
    );

    const json = await response.json();

    return json?.data?.result ?? null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
