"use client";

import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";

import supabase from "../../lib/supabase";

function cleanInput(value) {
    return `${value}`.replace(/[<>%$]/gi, "");
}

function ProjectsInq() {
    const defaultProjectInq = {
        name: "",
        email: "",
        phone: "",
        event_date: "",
        event_location: "",
        size: "",
        details: "",
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [feeback, setFeedback] = useState("");

    const ProjectInqSchema = Yup.object().shape({
        name: Yup.string().max(140, "Too long!").required("Required."),
        email: Yup.string().email("Invalid email.").max(140, "Too long!").required("Required."),
        phone: Yup.string().matches(/^[6-9]\d{9}$/, 'Invalid phone number').required('Required.'),
        event_date: Yup.date().required("Required."),
        event_location: Yup.string().max(140, "Too long!").required("Required."),
        size: Yup.string().max(140, "Too long!").required("Required."),
        details: Yup.string().max(800, "Too long!").required("Required."),
    });

    async function handleSubmit(values, { resetForm }) {
        setIsSubmitting(true);
        const { name, email, phone, event_date, event_location, size, details } = values;
        try {
            const { error } = await supabase.from("projectsinq").insert({ name, email, phone, event_date, event_location, size, details });
            if (error) {
                throw error;
            }
            setFeedback("Form submitted successfully");
            setIsSuccessful(true);
            resetForm();
        } catch (error) {
            console.log("Error occurred", { error });
            setFeedback("An error occurred");
        } finally {
            setIsSubmitting(false);
        }
    }

    useEffect(() => {
        if (feeback && !isSuccessful) {
            setTimeout(() => setFeedback(""), 3000);
        }
    }, [feeback, isSuccessful]);

    return (
        <section className="form-container">
            <h2>Project Inquiry Form</h2>

            {feeback && (
                <div className="feedback">
                    <p>{feeback}</p>
                </div>
            )}

            {!isSuccessful && (
                <Formik
                    enableReinitialize
                    initialValues={defaultProjectInq}
                    validationSchema={ProjectInqSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue }) => (
                        <Form>
                            <Field name="name">
                                {({ field, meta }) => (
                                    <div className="form-control">
                                        <label mb="1.5" fontSize="sm" htmlFor="projectinq-name">
                                            Name
                                        </label>
                                        <input
                                            {...field}
                                            placeholder="Enter name"
                                            id="projectinq-name"
                                            onChange={(e) => {
                                                const value = cleanInput(e.target.value);
                                                setFieldValue("name", value);
                                            }}
                                        />
                                        {meta.error && meta.touched && <p>{meta.error}</p>}
                                    </div>
                                )}
                            </Field>
                            <Field name="email">
                                {({ field, meta }) => (
                                    <div className="form-control">
                                        <label mb="1.5" fontSize="sm" htmlFor="projectinq-email">
                                            Email address
                                        </label>
                                        <input
                                            {...field}
                                            placeholder="Enter email"
                                            id="projectinq-email"
                                            onChange={(e) => {
                                                const value = cleanInput(e.target.value);
                                                setFieldValue("email", value);
                                            }}
                                        />

                                        {meta.error && meta.touched && <p>{meta.error}</p>}
                                    </div>
                                )}
                            </Field>
                            <Field name="phone">
                                {({ field, meta }) => (
                                    <div className="form-control">
                                        <label mb="1.5" fontSize="sm" htmlFor="projectinq-phone">
                                            Phone numnber
                                        </label>
                                        <input
                                            {...field}
                                            placeholder="Enter phone number"
                                            id="projectinq-phone"
                                            onChange={(e) => {
                                                const value = cleanInput(e.target.value);
                                                setFieldValue("phone", value);
                                            }}
                                        />
                                        {meta.error && meta.touched && <p>{meta.error}</p>}
                                    </div>
                                )}
                            </Field>
                            <Field name="event_date">
                                {({ field, meta }) => (
                                    <div className="form-control">
                                        <label mb="1.5" fontSize="sm" htmlFor="projectinq-event_date">
                                            Date of the event - or the earliest date you are able to ship your flowers
                                        </label>
                                        <input
                                            {...field}
                                            placeholder="When would your flowers be sent to me?"
                                            id="projectinq-name"
                                            onChange={(e) => {
                                                const value = cleanInput(e.target.value);
                                                setFieldValue("event_date", value);
                                            }}
                                        />
                                        {meta.error && meta.touched && <p>{meta.error}</p>}
                                    </div>
                                )}
                            </Field>
                            <Field name="event_location">
                                {({ field, meta }) => (
                                    <div className="form-control">
                                        <label mb="1.5" fontSize="sm" htmlFor="projectinq-event_location">
                                            Location
                                        </label>
                                        <input
                                            {...field}
                                            placeholder="Where will your flowers be shipped from?"
                                            id="projectinq-event_location"
                                            onChange={(e) => {
                                                const value = cleanInput(e.target.value);
                                                setFieldValue("event_location", value);
                                            }}
                                        />
                                        {meta.error && meta.touched && <p>{meta.error}</p>}
                                    </div>
                                )}
                            </Field>
                            <Field name="size">
                                {({ field, meta }) => (
                                    <div className="form-control">
                                        <label mb="1.5" fontSize="sm" htmlFor="projectinq-size">
                                            Size of the casting(s) that you are interested in
                                        </label>
                                        <input
                                            {...field}
                                            placeholder="Example: 4x6, 5x7, 8x10"
                                            onChange={(e) => {
                                                const value = cleanInput(e.target.value);
                                                setFieldValue("size", value);
                                            }}
                                        />
                                        {meta.error && meta.touched && <p>{meta.error}</p>}
                                    </div>
                                )}
                            </Field>
                            <Field name="details">
                                {({ field, meta }) => (
                                    <div className="form-control">
                                        <label mb="1.5" fontSize="sm" htmlFor="projectinq-details">
                                            Details
                                        </label>
                                        <textarea
                                            {...field}
                                            id="projectinq-details"
                                            placeholder="Please include any additional details."
                                            onChange={(e) => {
                                                const value = cleanInput(e.target.value);
                                                setFieldValue("details", value);
                                            }}
                                        />
                                        {meta.error && meta.touched && <p>{meta.error}</p>}
                                    </div>
                                )}
                            </Field>

                            <div className="button-container">
                                <button type="submit" className="submit-button">
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            )}
        </section>
    );
}

export default ProjectsInq;