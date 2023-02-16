import { name_mappings } from './bms-monitor.js'

function batteryReporter(attribute_status, abnormality) {
    if (!abnormality) {
        console.log("The battery is working under optimal conditions");
        return;
    }
    for (const attribute in attribute_status) {
        console.log(`${name_mappings[attribute]} is ${attribute_status[attribute]}`);
    }
}

export { batteryReporter };
