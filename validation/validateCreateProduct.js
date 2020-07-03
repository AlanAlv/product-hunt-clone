export default function validateCreateProduct(values) {
    let errors = {};

    // Validate username
    if(!values.name){
        errors.name = "Name is required";
    }

    // Validate company
    if(!values.company){
        errors.company = "Company Name is required";
    }

    // Validate url
        if(!values.url){
            errors.url = "Product URL is required";
        }
        else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)){}
            errors.url = "Invalid URL";

    // Validate description
    if(!values.description){
        errors.description = "Add a product description";
    }

    return errors;
}