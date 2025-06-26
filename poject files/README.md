
# 💻 Laptop Request Catalog Item – ITSM Project

This project contains files to create a ServiceNow-style Laptop Request Catalog Item. It is used in an ITSM environment where employees can request a laptop, and the request goes through a predefined workflow for approval and fulfillment.

## 🧰 Features
- Custom catalog item form with fields like Laptop Type, Justification, Accessories
- Dynamic form behavior using client scripts
- Automated workflow:
  - Approval from manager
  - Fulfillment by IT support
- Notification templates for request updates
- Business rules to auto-assign tasks

## 📂 Project Structure

- `catalog_item_design/`: UI elements and form metadata
- `server_code/`: Business rules, client scripts, and workflows
- `assets/`: Screenshots and visual assets
- `documentation/`: Reports and usage guides

## 🛠 How to Use
1. Clone the repo or download ZIP
2. Import XML/JSON files into your ServiceNow instance
3. Review and adjust workflow and scripts as needed
4. Test the form from the service catalog view

## 📸 Sample Screenshots
See `/assets/screenshots/` for form and workflow examples.

## 📃 License
MIT License
