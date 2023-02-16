import { batteryIsOk } from "./bms_monitor_production";
import { batteryReporter } from "./bms_monitor_battery_reporter";

test("Ckecking if all the tempetature status is low", () => {
    let attribute_status = batteryIsOk(-1, 40, 0.7, batteryReporter);
    expect(attribute_status['temperature']).toBe('low');
});
