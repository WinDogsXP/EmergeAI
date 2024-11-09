import React from "react";
import { TextField, Button, Grid2 } from "@mui/material";
import { SchemaField } from "./schema";

interface FormProps {
    schema?: SchemaField[];
    data?: { [key: string]: string };
    readOnly?: boolean;
    onSubmit?: (data: { [key: string]: string }) => void;
}

const AutoForm: React.FC<FormProps> = ({
    schema,
    data,
    readOnly,
    onSubmit,
}) => {
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
                {schema &&
                    schema.map((field) => (
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
                                minRows={
                                    field.type === "textarea" ? 3 : undefined
                                }
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
