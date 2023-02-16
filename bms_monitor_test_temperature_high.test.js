import { batteryIsOk } from "./bms_monitor_production";
import { batteryReporter } from "./bms_monitor_battery_reporter";

test("Ckecking if all the temperature status is high", () => {
    let attribute_status = batteryIsOk(50, 40, 0.7, batteryReporter);
    expect(attribute_status['temperature']).toBe('high');
});
