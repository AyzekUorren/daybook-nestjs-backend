export abstract class AbstractResponseDto {
    protected SetValueIfExists(data: any, allowFields: string[]) {
        const keys = Object.keys(data);

        keys.forEach(keyName => {
            if (
                allowFields.includes(keyName) &&
                ((Array.isArray(data[keyName]) && data[keyName].length > 0) ||
                    (!Array.isArray(data[keyName]) && !!data[keyName]))
            ) {
                this[keyName] = data[keyName];
            }
        });
    }
}
