"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const users_model_1 = require("../../users/users.model");
const room_entity_1 = require("../../rooms/entities/room.entity");
let Entry = class Entry extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Entry.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => users_model_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Entry.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => room_entity_1.Room),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Entry.prototype, "roomId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Entry.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Entry.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: 'TIMESTAMPTZ', allowNull: false }),
    __metadata("design:type", Date)
], Entry.prototype, "from", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: 'TIMESTAMPTZ', allowNull: false }),
    __metadata("design:type", Date)
], Entry.prototype, "to", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: 'one-time' }),
    __metadata("design:type", String)
], Entry.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, defaultValue: 'sky' }),
    __metadata("design:type", String)
], Entry.prototype, "color", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_model_1.User),
    __metadata("design:type", users_model_1.User)
], Entry.prototype, "responsible", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_model_1.User),
    __metadata("design:type", users_model_1.User)
], Entry.prototype, "userInfo", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => room_entity_1.Room),
    __metadata("design:type", room_entity_1.Room)
], Entry.prototype, "roomInfo", void 0);
Entry = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'entries' })
], Entry);
exports.Entry = Entry;
//# sourceMappingURL=entry.entity.js.map