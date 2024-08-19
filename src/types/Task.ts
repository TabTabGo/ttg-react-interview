interface BaseTaskType {
    title: string;
    description?: string;
}

export interface CreateTaskType extends BaseTaskType {
}

export interface Task extends BaseTaskType {
    id: number;
}