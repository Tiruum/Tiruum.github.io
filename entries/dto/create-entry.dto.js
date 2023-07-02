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
exports.CreateEntryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateEntryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123', description: 'ID пользователя' }),
    __metadata("design:type", Number)
], CreateEntryDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'kds', description: 'Кодовое название комнаты' }),
    __metadata("design:type", String)
], CreateEntryDto.prototype, "roomValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Просмотр фильма', description: 'Название мероприятия' }),
    __metadata("design:type", String)
], CreateEntryDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Фильм Начало', description: 'Описание мероприятия' }),
    __metadata("design:type", String)
], CreateEntryDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '20-02-2023T20:00:00', description: 'Начало мероприятия' }),
    __metadata("design:type", Date)
], CreateEntryDto.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '20-02-2023T22:00:00', description: 'Конец мероприятия' }),
    __metadata("design:type", Date)
], CreateEntryDto.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'red', description: 'Название цвета' }),
    __metadata("design:type", String)
], CreateEntryDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'weekly', description: 'Тип мероприятия' }),
    __metadata("design:type", String)
], CreateEntryDto.prototype, "type", void 0);
exports.CreateEntryDto = CreateEntryDto;
//# sourceMappingURL=create-entry.dto.js.map