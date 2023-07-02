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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WmsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const wm_entity_1 = require("./entities/wm.entity");
let WmsService = class WmsService {
    constructor(wmRepository) {
        this.wmRepository = wmRepository;
    }
    async create(createWmDto) {
        const wm = await this.wmRepository.create(createWmDto);
        return wm;
    }
    async findAll() {
        const wms = await this.wmRepository.findAll();
        return wms;
    }
    async findByValue(value) {
        const wms = await this.wmRepository.findOne({ where: { value } });
        return wms;
    }
    async update(value, updateWmDto) {
        const wm = await this.wmRepository.update(Object.assign({}, updateWmDto), { where: { value }, returning: true });
        return wm[0][0];
    }
    async remove(value) {
        const wm = await this.wmRepository.destroy({ where: { value } });
        return wm;
    }
};
WmsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(wm_entity_1.Wm)),
    __metadata("design:paramtypes", [Object])
], WmsService);
exports.WmsService = WmsService;
//# sourceMappingURL=wms.service.js.map