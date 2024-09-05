import CainItemBase from "../base-item.mjs";

export default class CainBlasphemyPower extends CainItemBase {
    static defineSchema() {
        const fields = foundry.data.fields;
        const requiredInteger = { required: true, nullable: false, integer: true };
        const schema = super.defineSchema();
    
        
        schema.blasphemyType = new fields.StringField({ required: true, nullable: false, initial: "New Blasphemy" });
        schema.powerName = new fields.StringField({ required: true, nullable: false, initial: "Blasphemy Power Name" });
        schema.isPassive = new fields.BooleanField({ required: true, nullable: false, initial: false });
        schema.keywords = new fields.ArrayField(new fields.StringField(), { required: true, nullable: false, initial: [] });
        schema.powerDescription = new fields.StringField({ required: true, nullable: false, initial: "default" });

        return schema;
      }
}