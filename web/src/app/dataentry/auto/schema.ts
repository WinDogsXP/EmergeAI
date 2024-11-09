export interface SchemaField {
    key: string;
    label: string;
    type: "text" | "textarea";
}

export const entryFormSchema: SchemaField[] = [
    { key: "age", label: "Age", type: "text" },
    { key: "gender", label: "Gender", type: "text" },
    { key: "name", label: "Name", type: "text" },
    { key: "urgency", label: "Urgency", type: "text" },
    { key: "status", label: "Status", type: "text" },
    { key: "case", label: "Case", type: "text" },
    { key: "description", label: "Case Description", type: "textarea" },
];
