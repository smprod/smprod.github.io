window.function = async function(jsCode, p1, p2, p3) {
    // Extract values from Glide column format if needed
    jsCode = jsCode?.value || jsCode || "";
    p1 = p1?.value || p1;
    p2 = p2?.value || p2;
    p3 = p3?.value || p3;

    if (!jsCode) {
        return "Error: JavaScript code is required";
    }

    try {
        // Create a function from the provided code
        const userFunction = new Function('p1', 'p2', 'p3', jsCode);

        // Execute the function with the provided parameters
        const result = await userFunction(p1, p2, p3);

        // Convert result to string
        return String(result);
    } catch (error) {
        return `Error: ${error.message}`;
    }
};
