import { batteryIsOk } from "./bms_monitor_production";
import { batteryReporter } from "./bms_monitor_battery_reporter";

test("Ckecking if all the attribute's status is normal", () => {
    let attribute_status = batteryIsOk(40, 40, 0.7, batteryReporter);
    for (const attribute in attribute_status) {
        expect(attribute_status[attribute]).toBe('normal');
    }
});
