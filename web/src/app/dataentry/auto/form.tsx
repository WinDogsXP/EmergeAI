import React from "react";
import { TextField, Button, Grid2 } from "@mui/material";

interface SchemaField {
    key: string;
    label: string;
    type: "text" | "textarea";
}

interface FormProps {
    schema?: SchemaField[];
    data?: { [key: string]: string };
    readOnly?: boolean;
    onSubmit?: (data: { [key: string]: string }) => void;
}

const schema: SchemaField[] = [
    { key: "id112", label: "ID 112", type: "text" },
    { key: "priority", label: "Priority", type: "text" },
    { key: "status", label: "Status", type: "text" },
    { key: "case", label: "Case", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "county", label: "County", type: "text" },
    { key: "municipality", label: "Municipality", type: "text" },
    { key: "street", label: "Street", type: "text" },
    { key: "block", label: "Block", type: "text" },
    { key: "floor", label: "Floor", type: "text" },
    { key: "intercom", label: "Intercom", type: "text" },
    { key: "location", label: "Location Reference", type: "text" },
    { key: "age", label: "Age", type: "text" },
    { key: "ageUnit", label: "Age Unit", type: "text" },
    { key: "gender", label: "Gender", type: "text" },
    { key: "cnp", label: "CNP", type: "text" },
    { key: "phone", label: "Phone", type: "text" },
];

const AutoForm: React.FC<FormProps> = ({ data, readOnly, onSubmit }) => {
    const [formData, setFormData] = React.useState<{ [key: string]: string }>(
        data || {}
    );

    const handleChange =
        (key: string) =>
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData({
                ...formData,
                [key]: event.target.value,
            });
        };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (onSubmit) onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2}>
                {schema.map((field) => (
                    <Grid2
                        size={
                            field.type === "textarea"
                                ? { xs: 12 }
                                : { xs: 12, md: 6, lg: 4 }
                        }
                        key={field.key}
                    >
                        <TextField
                            label={field.label}
                            value={formData[field.key] || ""}
                            onChange={handleChange(field.key)}
                            fullWidth
                            multiline={field.type === "textarea"}
                            minRows={field.type === "textarea" ? 3 : undefined}
                            InputProps={{
                                readOnly: readOnly,
                            }}
                        />
                    </Grid2>
                ))}
                {!readOnly && (
                    <Grid2 size={{ xs: 12 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </Grid2>
                )}
            </Grid2>
        </form>
    );
};

export default AutoForm;
