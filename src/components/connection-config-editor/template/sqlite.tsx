import { ConnectionTemplateList } from "@/app/(outerbase)/base-template";
import { CommonConnectionConfigTemplate } from "..";

// SQLite connections are now fixed to a server-side configured database file.
// The UI no longer allows selecting a database, so the template is empty.
const template: CommonConnectionConfigTemplate = [];

export const SqliteConnectionTemplate: ConnectionTemplateList = {
  template,
  localFrom: (value) => {
    return {
      name: value.name,
    };
  },
  localTo: (value) => {
    return {
      name: value.name,
      driver: "sqlite",
    };
  },
};
