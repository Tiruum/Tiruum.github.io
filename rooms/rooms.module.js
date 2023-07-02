"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsModule = void 0;
const common_1 = require("@nestjs/common");
const rooms_service_1 = require("./rooms.service");
const rooms_controller_1 = require("./rooms.controller");
const sequelize_1 = require("@nestjs/sequelize");
const room_entity_1 = require("./entities/room.entity");
const users_model_1 = require("../users/users.model");
const users_module_1 = require("../users/users.module");
const entry_entity_1 = require("../entries/entities/entry.entity");
let RoomsModule = class RoomsModule {
};
RoomsModule = __decorate([
    (0, common_1.Module)({
        controllers: [rooms_controller_1.RoomsController],
        providers: [rooms_service_1.RoomsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([room_entity_1.Room, users_model_1.User, entry_entity_1.Entry]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
        ],
        exports: [
            rooms_service_1.RoomsService
        ]
    })
], RoomsModule);
exports.RoomsModule = RoomsModule;
//# sourceMappingURL=rooms.module.js.map