import { createContext, ReactNode, useContext, useState } from "react";
import { api_faunadb } from '../services/api_faunadb';

interface ClassesProviderProps {
    children: ReactNode;
}

interface DProps {
    id: string,
    hour: string,
    day: string,
    classLevel: string,
    classAmount: string,
    status: string,
    teacher: {
        name: string;
    },
    studentsList: {},
    timetable: {}
}

interface ClassesProviderData {
    classes: DProps[];
    boxSelected: string | undefined;
    setBoxSelected: (classId: string) => void;
    refreshClasses: () => void;
}

const ClassesContext = createContext<ClassesProviderData>({} as ClassesProviderData);

export function ClassesProvider({children}: ClassesProviderProps): JSX.Element {
    const [ classes, setClasses ] = useState<DProps[]>([]);
    const [ boxSelected, setBoxSelected ] = useState<string | undefined>();

    const refreshClasses = async () => {
        const result = await api_faunadb('/classes/RetrieveClasses', {
            method: 'GET'
        });

        setClasses(result.data.classes.data);
        setBoxSelected(result.data.classes.data[0].id);
    }

    return (
        <ClassesContext.Provider
            value={{ classes, boxSelected, setBoxSelected, refreshClasses }}
        >
            {children}
        </ClassesContext.Provider>
    )
}

export function useClassesContext() {
    const context = useContext(ClassesContext);

    return context;
}