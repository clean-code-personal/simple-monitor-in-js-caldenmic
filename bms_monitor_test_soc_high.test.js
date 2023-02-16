import { batteryIsOk } from "./bms-monitor";
import { batteryReporter } from "./bms_monitor_battery_reporter";

test("Ckecking if all the State of Charge status is high", () => {
    let attribute_status = batteryIsOk(40, 90, 0.7, batteryReporter);
    expect(attribute_status['soc']).toBe('high');
});
