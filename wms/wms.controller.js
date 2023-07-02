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
exports.WmsController = void 0;
const common_1 = require("@nestjs/common");
const wms_service_1 = require("./wms.service");
const create_wm_dto_1 = require("./dto/create-wm.dto");
const update_wm_dto_1 = require("./dto/update-wm.dto");
const swagger_1 = require("@nestjs/swagger");
let WmsController = class WmsController {
    constructor(wmsService) {
        this.wmsService = wmsService;
    }
    create(createWmDto) {
        return this.wmsService.create(createWmDto);
    }
    findAll() {
        return this.wmsService.findAll();
    }
    findByValue(value) {
        return this.wmsService.findByValue(value);
    }
    update(value, updateWmDto) {
        return this.wmsService.update(+value, updateWmDto);
    }
    remove(value) {
        return this.wmsService.remove(+value);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wm_dto_1.CreateWmDto]),
    __metadata("design:returntype", void 0)
], WmsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WmsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':value'),
    __param(0, (0, common_1.Param)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WmsController.prototype, "findByValue", null);
__decorate([
    (0, common_1.Patch)(':value'),
    __param(0, (0, common_1.Param)('value')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_wm_dto_1.UpdateWmDto]),
    __metadata("design:returntype", void 0)
], WmsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':value'),
    __param(0, (0, common_1.Param)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WmsController.prototype, "remove", null);
WmsController = __decorate([
    (0, swagger_1.ApiTags)("Стиральные машины"),
    (0, common_1.Controller)('wms'),
    __metadata("design:paramtypes", [wms_service_1.WmsService])
], WmsController);
exports.WmsController = WmsController;
//# sourceMappingURL=wms.controller.js.map