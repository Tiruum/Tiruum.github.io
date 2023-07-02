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
exports.CreateWmDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateWmDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4, description: 'Номер стиральной машины' }),
    __metadata("design:type", Number)
], CreateWmDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 30, description: 'Стоимость стирки в этой стиральной машине' }),
    __metadata("design:type", Number)
], CreateWmDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Активна ли стиральная машина' }),
    __metadata("design:type", Boolean)
], CreateWmDto.prototype, "isActive", void 0);
exports.CreateWmDto = CreateWmDto;
//# sourceMappingURL=create-wm.dto.js.map