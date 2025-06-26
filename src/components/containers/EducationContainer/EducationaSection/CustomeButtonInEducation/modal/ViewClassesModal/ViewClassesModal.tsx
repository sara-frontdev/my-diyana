import { FC, Suspense } from "react";

import { FullModal } from "@/components/common/FullModal/FullModal";
import { ListTable } from "@/components/common/Tables/ListTable/ListTable";
import { Columns } from "./Columns/Columns";

// core
import { IGetCostLessonAttributesForCourseUnitSelectlist } from "@/core/types/response/CostLessonAttribute.res";
import { IGetCapacityCalenderCostLessonAttributeResult } from "@/core/types/response/CalenderCostLessonAttribute.res";

interface IPropType {
  isOpen: boolean;
  toggleModal: () => void;
  item: IGetCostLessonAttributesForCourseUnitSelectlist;
  selectedDates: IGetCapacityCalenderCostLessonAttributeResult[];
}

const ViewClassesModal: FC<IPropType> = ({
  isOpen,
  toggleModal,
  selectedDates,
}) => {
  return (
    <Suspense>
      <FullModal
        title=""
        isOpen={isOpen}
        toggleModal={toggleModal}
        className="bg-white rounded-lg"
        centered
        width={800}
      >
        <ListTable
          dataSource={selectedDates}
          columns={Columns()}
          hasExport={false}
          hiddenId
        />
      </FullModal>
    </Suspense>
  );
};

export default ViewClassesModal;
