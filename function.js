window.function = async function(jsCode, p1, p2, p3, n1, n2, n3) {
    // Extract values from Glide column format if needed
    jsCode = jsCode?.value || jsCode || "";
    p1 = p1?.value || p1;
    p2 = p2?.value || p2;
    p3 = p3?.value || p3;

    // Convert number parameters to actual numbers
    n1 = Number(n1?.value || n1 || 0);
    n2 = Number(n2?.value || n2 || 0);
    n3 = Number(n3?.value || n3 || 0);

    if (!jsCode) {
        return "Error: JavaScript code is required";
    }

    try {
        // Prepare the code - add return if not present
        let functionBody = jsCode.trim();

        // If code doesn't contain 'return', wrap it with return
        if (!functionBody.includes('return')) {
            functionBody = `return (${functionBody})`;
        }

        // Create a function from the provided code
        const userFunction = new Function('p1', 'p2', 'p3', 'n1', 'n2', 'n3', functionBody);

        // Execute the function with the provided parameters
        const result = await userFunction(p1, p2, p3, n1, n2, n3);

        // Convert result to string
        return String(result);
    } catch (error) {
        return `Error: ${error.message}`;
    }
};
