import { batteryIsOk } from "./bms-monitor";
import { batteryReporter } from "./bms_monitor_battery_reporter";

test("Ckecking if all the State of charge status is low", () => {
    let attribute_status = batteryIsOk(40, 15, 0.7, batteryReporter);
    expect(attribute_status['soc']).toBe('low');
});
