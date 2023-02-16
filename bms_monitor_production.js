let name_mappings = {'temperature': 'Temperature', 'soc': 'State of charge', 'charge_rate': 'Charge rate'}

function batteryIsOk(temperature, soc, charge_rate, reporter=null) {
    let attribute_range = {'temperature': [0, 45], 'soc': [20, 80], 'charge_rate': [0, 0.8]};
    let attribute_status = {'temperature': 'normal', 'soc': 'normal', 'charge_rate': 'normal'};
    let abnormality = 0;

    for (const attribute in attribute_range) {
        let [lower_limit, upper_limit] = attribute_range[attribute];
        abnormality = updateStatus(temperature, soc, charge_rate, attribute, lower_limit, upper_limit, abnormality, attribute_status);
    }
    reporter? reporter(attribute_status, abnormality) : null;

    return attribute_status;
}

function updateStatus(temperature, soc, charge_rate, attribute, lower_limit, upper_limit, abnormality, status) {
        if (eval(attribute) < lower_limit) {
            status[attribute] = 'low';
            abnormality = 1;
        }
        else if (eval(attribute) > upper_limit) {
            status[attribute] = 'high';
            abnormality = 1;
        }

        return abnormality;
}

export { batteryIsOk, name_mappings };
