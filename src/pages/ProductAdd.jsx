import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import React from "react"
import { FormField, Button, Label } from "semantic-ui-react"
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
    //başlangıç değerleri
    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object(//doğrulama yapmaya yarar
        {
            productName: Yup.string().required("Product Name is required"),
            unitPrice: Yup.number().required("Unit Price is required"),
        })
    return (
        <Formik initialValues={initialValues} validationSchema={schema}
            onSubmit={(values) => { console.log(values) }}
        >
            <Form className="ui form">
                <KodlamaIoTextInput name="productName" placeholder="Product Name"/>
                <KodlamaIoTextInput name="unitPrice" placeholder="Unit Price"/>
                <Button color="green" type="submit">Add</Button>
            </Form>
        </Formik>
    )
}
