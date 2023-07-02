"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntriesModule = void 0;
const common_1 = require("@nestjs/common");
const entries_service_1 = require("./entries.service");
const entries_controller_1 = require("./entries.controller");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const room_entity_1 = require("../rooms/entities/room.entity");
const users_module_1 = require("../users/users.module");
const rooms_module_1 = require("../rooms/rooms.module");
const entry_entity_1 = require("./entities/entry.entity");
let EntriesModule = class EntriesModule {
};
EntriesModule = __decorate([
    (0, common_1.Module)({
        controllers: [entries_controller_1.EntriesController],
        providers: [entries_service_1.EntriesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_model_1.User, room_entity_1.Room, entry_entity_1.Entry]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => rooms_module_1.RoomsModule)
        ],
        exports: []
    })
], EntriesModule);
exports.EntriesModule = EntriesModule;
//# sourceMappingURL=entries.module.js.map