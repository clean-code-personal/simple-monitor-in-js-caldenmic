import { batteryIsOk } from "./bms_monitor_production";
import { batteryReporter } from "./bms_monitor_battery_reporter";

test("Ckecking if all the Charge State status is low", () => {
    let attribute_status = batteryIsOk(30, 40, -0.1, batteryReporter);
    expect(attribute_status['charge_rate']).toBe('low');
});
