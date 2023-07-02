"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WmsModule = void 0;
const common_1 = require("@nestjs/common");
const wms_service_1 = require("./wms.service");
const wms_controller_1 = require("./wms.controller");
const wm_entity_1 = require("./entities/wm.entity");
const sequelize_1 = require("@nestjs/sequelize");
const wm_entry_entity_1 = require("../wm-entries/entities/wm-entry.entity");
let WmsModule = class WmsModule {
};
WmsModule = __decorate([
    (0, common_1.Module)({
        controllers: [wms_controller_1.WmsController],
        providers: [wms_service_1.WmsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([wm_entity_1.Wm, wm_entry_entity_1.WmEntry])
        ],
        exports: [
            wms_service_1.WmsService
        ]
    })
], WmsModule);
exports.WmsModule = WmsModule;
//# sourceMappingURL=wms.module.js.map