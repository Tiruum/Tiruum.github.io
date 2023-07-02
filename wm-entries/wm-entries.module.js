"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WmEntriesModule = void 0;
const common_1 = require("@nestjs/common");
const wm_entries_service_1 = require("./wm-entries.service");
const wm_entries_controller_1 = require("./wm-entries.controller");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const wm_entry_entity_1 = require("./entities/wm-entry.entity");
const users_module_1 = require("../users/users.module");
const wm_entity_1 = require("../wms/entities/wm.entity");
const wms_module_1 = require("../wms/wms.module");
let WmEntriesModule = class WmEntriesModule {
};
WmEntriesModule = __decorate([
    (0, common_1.Module)({
        controllers: [wm_entries_controller_1.WmEntriesController],
        providers: [wm_entries_service_1.WmEntriesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_model_1.User, wm_entry_entity_1.WmEntry, wm_entity_1.Wm]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => wms_module_1.WmsModule)
        ],
        exports: [
            wm_entries_service_1.WmEntriesService
        ]
    })
], WmEntriesModule);
exports.WmEntriesModule = WmEntriesModule;
//# sourceMappingURL=wm-entries.module.js.map