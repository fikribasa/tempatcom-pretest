const Decorator = ({x, y, data}) => {
  return data.map((value, index) => (
    <View>
      {index === 0 ? (
        <View>
          <Circle
            key={index}
            cx={x(index) + 30}
            cy={y(value + 3)}
            r={6}
            fill={'blue'}
          />
          <SVGText
            fill="purple"
            fontSize="20"
            x={x(index) + 30}
            y={y(value + 7)}
            textAnchor="middle">
            {value}%
          </SVGText>
          <SVGText
            fill="purple"
            fontSize="10"
            x={x(index) + 30}
            y={y(value - 4)}
            textAnchor="middle">
            {index % 2 === 0 ? '09:00-12.00' : '13:00-16:30'}
          </SVGText>
        </View>
      ) : index == 2 ? (
        <View>
          <Circle
            key={index}
            cx={x(index) - 30}
            cy={y(value + 3)}
            r={6}
            fill={'blue'}
          />
          <SVGText
            fill="purple"
            fontSize="10"
            x={x(index) - 30}
            y={y(value + 7)}
            textAnchor="middle">
            {value}%
          </SVGText>

          <SVGText
            fill="purple"
            fontSize="10"
            x={x(index) - 30}
            y={y(value - 4)}
            textAnchor="middle">
            {index % 2 === 0 ? '09:00-12.00' : '13:00-16:30'}
          </SVGText>
        </View>
      ) : (
        <View>
          <Circle key={index} cx={x(index)} cy={y(value)} r={6} fill={'blue'} />
          <SVGText
            fill="purple"
            fontSize="10"
            x={x(index)}
            y={y(value + 5)}
            textAnchor="middle">
            {value}%
          </SVGText>

          <SVGText
            fill="purple"
            fontSize="10"
            x={x(index)}
            y={y(value - 7)}
            textAnchor="middle">
            {index % 2 === 0 ? '09:00-12.00' : '13:00-16:30'}
          </SVGText>
        </View>
      )}
    </View>
  ));
};

const Line = ({line}) => (
  <Path d={line} stroke={'rgba(134, 65, 244)'} fill={'none'} />
);
