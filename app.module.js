"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const users_model_1 = require("./users/users.model");
const roles_module_1 = require("./roles/roles.module");
const roles_model_1 = require("./roles/roles.model");
const user_roles_model_1 = require("./roles/user-roles.model");
const auth_module_1 = require("./auth/auth.module");
const entries_module_1 = require("./entries/entries.module");
const rooms_module_1 = require("./rooms/rooms.module");
const room_entity_1 = require("./rooms/entities/room.entity");
const entry_entity_1 = require("./entries/entities/entry.entity");
const wm_entries_module_1 = require("./wm-entries/wm-entries.module");
const wm_entry_entity_1 = require("./wm-entries/entities/wm-entry.entity");
const wms_module_1 = require("./wms/wms.module");
const wm_entity_1 = require("./wms/entities/wm.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env'
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.PG_HOST,
                port: Number(process.env.PG_PORT),
                username: process.env.PG_USERNAME,
                password: process.env.PG_PASSWORD,
                database: process.env.PG_DB,
                models: [users_model_1.User, roles_model_1.Role, user_roles_model_1.UserRoles, room_entity_1.Room, entry_entity_1.Entry, wm_entry_entity_1.WmEntry, wm_entity_1.Wm],
                autoLoadModels: true
            }),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
            entries_module_1.EntriesModule,
            rooms_module_1.RoomsModule,
            wm_entries_module_1.WmEntriesModule,
            wms_module_1.WmsModule,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map