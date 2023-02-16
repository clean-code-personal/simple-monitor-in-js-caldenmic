import { batteryIsOk } from "./bms_monitor";
import { batteryReporter } from "./bms_monitor_battery_reporter";

test("Ckecking if all the Charge State status is high", () => {
    let attribute_status = batteryIsOk(40, 40, 0.9, batteryReporter);
    expect(attribute_status['charge_rate']).toBe('high');
});
