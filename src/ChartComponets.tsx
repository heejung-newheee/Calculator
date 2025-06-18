import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Slider } from "./components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "1", value: 0 },
  { name: "2", value: 0 },
  { name: "3", value: 0 },
  { name: "4", value: 20 },
  { name: "5", value: 80 },
  { name: "6", value: 0 },
  { name: "7", value: 0 },
];
function ChartComponents() {
  return (
    <div className="space-y-8 p-6">
      <h2 className="font-bold text-2xl">Grade Calculator</h2>

      {/* ToggleGroup */}
      <ToggleGroup type="single" defaultValue="SL" className="gap-2">
        <ToggleGroupItem value="SL">SL</ToggleGroupItem>
        <ToggleGroupItem value="HL">HL</ToggleGroupItem>
      </ToggleGroup>

      {/* 시험 세션 버튼 */}
      <div className="flex gap-2">
        {["M24 T1", "M24 T2", "N24 T1", "N24 T2"].map((term) => (
          <Button key={term} variant="outline">
            {term}
          </Button>
        ))}
      </div>

      {/* 과목별 슬라이더 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          { label: "Paper 1: Source-Based", weight: "30%", max: 24 },
          { label: "Paper 2: Essay", weight: "45%", max: 30 },
          { label: "Historical Investigation", weight: "25%", max: 25 },
        ].map((item, i) => (
          <Card key={i} className="bg-sky-100">
            <CardHeader>
              <CardTitle className="text-base">{item.label}</CardTitle>
              <p className="text-sm">Weight: {item.weight}</p>
            </CardHeader>
            <CardContent>
              <Slider defaultValue={[item.max / 2]} max={item.max} step={1} />
              <Input
                type="number"
                defaultValue={item.max / 2}
                className="mt-2 w-20"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 결과 */}
      <div className="flex gap-4">
        <Card className="flex-1 bg-sky-200 text-center">
          <CardHeader>
            <CardTitle>Predicted Grade</CardTitle>
            <p className="text-sm">12 points away from next mark</p>
          </CardHeader>
          <CardContent className="font-bold text-4xl">50</CardContent>
        </Card>

        <Card className="flex-1 bg-sky-200 text-center">
          <CardHeader>
            <CardTitle>Predicted Mark</CardTitle>
            <p className="text-sm">Using M24 T1 grade boundary</p>
          </CardHeader>
          <CardContent className="font-bold text-4xl">5</CardContent>
        </Card>
      </div>

      {/* 그래프 */}
      <div>
        <h3 className="font-bold text-xl">
          Predicted Mark Probability Distribution
        </h3>
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 120]} />
          <Tooltip />
          <Bar dataKey="value" fill="#38bdf8" />
        </BarChart>
      </div>
    </div>
  );
}

export default ChartComponents;
