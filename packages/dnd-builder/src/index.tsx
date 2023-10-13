import React, { FC } from "react";
import GridLayout from "react-grid-layout";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

const Grid = ({ responsive }: { responsive: boolean }) => {
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
      ];
      const layouts = {
        lg: layout,
        md: layout,
        sm: layout,
        xs: layout
      }

      return (
        <>
            {
                responsive ?
                <ResponsiveGridLayout
                    className="layout"
                    layouts={layouts}
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                >
                    <div key="1">1</div>
                    <div key="2">2</div>
                    <div key="3">3</div>
                </ResponsiveGridLayout>
                :
                <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1200}
                >
                <div key="a">a</div>
                <div key="b">b</div>
                <div key="c">c</div>
                </GridLayout>
            }
        </>
      );
}

export default Grid;