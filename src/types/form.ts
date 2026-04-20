import { UseFormRegister, FieldValues, Path } from "react-hook-form";

// Generic type untuk form values
export type FormData = {
    fullName: string;
    email: string;
    password: string;
    eventCategory: string;
    bio: string;
};

// Type untuk register yang reusable
export type FormRegister<T extends FieldValues = FormData> = UseFormRegister<T>;

// Type untuk field name
export type FormFieldName<T extends FieldValues = FormData> = Path<T>;