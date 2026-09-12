# Retail Sales Analysis and AI Automation

An end to end project combining data cleaning, statistical analysis, and a live AI powered reporting automation, built on a real retail point of sale dataset.

**Read the full write up:** [case_study_retail_sales_automation.md](case_study_retail_sales_automation.md)

---

## What this project does

1. Cleans a messy, real world retail sales export (missing values, inconsistent types, a genuine date formatting bug) using pandas.
2. Answers four core business questions plus a validated seasonality finding, with the reasoning behind each metric choice explained in the case study.
3. Generates supporting charts for each finding.
4. Builds a JSON summary of the results and sends it to an AI model with a carefully hardened prompt, so the model only narrates verified numbers rather than inventing projections or explanations. The prompt went through five rounds of testing before it reliably avoided hallucinated interpretation, documented in full in the case study.
5. Rebuilds the same pipeline as a live automation in n8n: a Google Sheet stands in for a live sales system, and any new row triggers a fresh analysis and an AI generated report, delivered automatically by email and Slack.

## Files in this repo

| File | Description |
|---|---|
| `case_study_retail_sales_automation.md` | Full write up: decisions, findings, bugs hit and fixed, and reflections |
| `retail_sales_pipeline.py` | The complete, commented Python pipeline: clean, analyze, chart, and generate an AI summary |
| `n8n_code_node.js` | The JavaScript logic powering the live n8n automation |
| `cleaned_retail_sales.csv` | The dataset after cleaning, ready for the script to analyze |
| `chart_seasonality.png`, `chart_top_items.png`, `chart_payment_method.png`, `chart_location.png` | The four supporting charts referenced in the case study |

## Tools used

Python (pandas, matplotlib), OpenAI API, n8n, Google Sheets, Gmail and Slack integrations.

## Dataset

Sourced from Kaggle: https://github.com/FaizanAliData/Retail-sales_AI-automation. See the case study for details on the cleaning process applied.

## Running it yourself

```
pip install pandas matplotlib openai
```

Set an `OPENAI_API_KEY` environment variable, then run:

```
python retail_sales_pipeline.py
```

This will clean the data, print the four core findings, save four chart images, and print an AI generated summary to the console.
