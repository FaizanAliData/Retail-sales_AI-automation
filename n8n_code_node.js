// Get all merged items from the previous node
const items = $input.all();

// Find each year's revenue row
const item2022 = items.find(i => i.json.Year === 2022);
const item2023 = items.find(i => i.json.Year === 2023);
const item2024 = items.find(i => i.json.Year === 2024);

// Find the single top item row (already sorted + limited to 1 upstream)
const topitem = items.find(i => i.json.Item !== undefined);

// Find all seasonality rows, sort descending, take the peak month
const seasonalityItems = items.filter(i => i.json.average_sum_Total_Spent !== undefined);
seasonalityItems.sort((a, b) => b.json.average_sum_Total_Spent - a.json.average_sum_Total_Spent);
const peakMonth = seasonalityItems[0];

// Build the final packaged JSON object
const packaged_data = {
    "top_item": {
        "name": topitem.json.Item,
        "quantity": topitem.json.sum_Quantity
    },
    "yearly_revenue": {
        "2022": item2022.json.sum_Total_Spent,
        "2023": item2023.json.sum_Total_Spent,
        "2024": item2024.json.sum_Total_Spent
    },
    "peak_perfomance": {
        "month": peakMonth.json.Month,
        "revenue": peakMonth.json.average_sum_Total_Spent
    }
};

// Return in the format n8n expects
return [{ json: packaged_data }];
