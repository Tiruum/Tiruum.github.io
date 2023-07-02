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
exports.CreateWmEntryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateWmEntryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'booked', description: 'Статус записи' }),
    __metadata("design:type", String)
], CreateWmEntryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123', description: 'ID пользователя, который записывается в ячейку' }),
    __metadata("design:type", Number)
], CreateWmEntryDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'Номер стиральной машины' }),
    __metadata("design:type", Number)
], CreateWmEntryDto.prototype, "wmValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '00:00-02:00', description: 'Промежуток времени, на который записываются' }),
    __metadata("design:type", String)
], CreateWmEntryDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '20.02.2023', description: 'День, на который записываются' }),
    __metadata("design:type", String)
], CreateWmEntryDto.prototype, "date", void 0);
exports.CreateWmEntryDto = CreateWmEntryDto;
//# sourceMappingURL=create-wm-entry.dto.js.map