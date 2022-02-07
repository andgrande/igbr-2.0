import CreateClassParams from "../dtos/ClassEntities/CreateClassDTO";

export default function GenerateClassCode({ data }: CreateClassParams) {
    const { class_day, class_hour, class_level } = data;
    const yearSemester = '2022-01-';

    let code = yearSemester + class_level + class_day.slice(0, 3).toUpperCase() + (class_hour < 10 ? '0' : '') + class_hour;

    return code;
}