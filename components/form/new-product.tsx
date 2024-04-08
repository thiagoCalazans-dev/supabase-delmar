import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function NewProduct() {
  return (
    <div>
      <form className="space-y-2">
        <div>
          <Label>Nome</Label>
          <Input />
        </div>
        <div>
          <Label>Categoria</Label>
          <Input />
        </div>
        <div>
          <Label>Marca</Label>
          <Input />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label>Cor</Label>
            <Input />
          </div>
          <div>
            <Label>Tamanho</Label>
            <Input />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="cost">Custo</Label>
            <Input />
          </div>
          <div>
            <Label>Preço</Label>
            <Input />
          </div>
        </div>
        <Button className="w-full">Cadastrar</Button>
      </form>
    </div>
  );
}
