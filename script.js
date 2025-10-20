// Global variable to hold the dataset
let dataset = [];

// Load the dataset from data.js
function loadDataset() {
    dataset = window.dataset; // Access the dataset from data.js
    alert('Dataset Loaded Successfully');
}

// Perform Exploratory Data Analysis (EDA)
function performEDA() {
    if (dataset.length === 0) {
        alert('Please load the dataset first.');
        return;
    }

    // Example: Show sales distribution plot
    const sales = dataset.map(row => row["Units Sold"]);
    const dates = dataset.map(row => row["Date"]);

    const trace = {
        x: dates,
        y: sales,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Units Sold',
    };

    const layout = {
        title: 'Units Sold Over Time',
        xaxis: {
            title: 'Date',
        },
        yaxis: {
            title: 'Units Sold',
        },
    };

    const data = [trace];
    Plotly.newPlot('eda-output', data, layout);
}

// Simulate model training
function trainModel() {
    if (dataset.length === 0) {
        alert('Please load the dataset first.');
        return;
    }

    // Simulate the training process (this would usually be done via backend)
    alert('Model Trained! (Simulation)');
}

// Simulate a prediction
function predict() {
    if (dataset.length === 0) {
        alert('Please load the dataset first.');
        return;
    }

    // Simulate a prediction (In reality, you would run the LSTM/GRU model)
    const predictedSales = Math.random() * 200; // Random sales prediction for demonstration

    document.getElementById('prediction-output').innerHTML = `Predicted Sales: $${predictedSales.toFixed(2)}`;
}
