/* eslint-disable react/prop-types */
import { Icon } from '../icon/icon';
import { Btn } from './button.styles';


export const Button = ({
    $w,
    $h,
    $display,
    $alignItems,
    $justifyContent,
    onClick,
    $text,
    $fontColor,
    $fontSize,
    $fontWeight,
    $p,
    $m,
    $icon,
    $iconSizeW,
    $iconSizeH,
    $iconFill,
    $iconStroke,
    $iconMargin,
    $iconPadding,
    $iconPosition,
    $border,
    $borderRadius,
    $bgColor,
    $cursor,
    $opacity,
    $disabled,
    $hoverFontColor,
    $hoverBackgroundColor,
    $iconBgColor,
    $iconBorderRadius,
    $boxShadow,
    $alignSelf,
    $position,
    $left,
    $right,
    $top,
    $bottom,
}) => {
    const handleClick = (e) => {
        if (!$disabled && onClick) {
            onClick(e);
        }
    };

    return (
        <Btn
            onClick={handleClick}
            $p={$p}
            $bgColor={$bgColor}
            border={$border}
            $fontColor={$fontColor}
            $margin={$m}
            $width={$w}
            $height={$h}
            $fontSize={$fontSize}
            $fontWeight={$fontWeight}
            $br={$borderRadius}
            $cursor={$cursor}
            $opacity={$opacity}
            $boxShadow={$boxShadow}
            $hoverFontColor={$hoverFontColor}
            $hoverBackgroundColor={$hoverBackgroundColor}
            $disabled={$disabled}
            $display={$display}
            $alignItems={$alignItems}
            $justifyContent={$justifyContent}
            $alignSelf={$alignSelf}
            $position={$position}
            $left={$left}
            $right={$right}
            $top={$top}
            $bottom={$bottom}
        >
            {$iconPosition === 'left' && (
                <Icon
                    $bgColor={$iconBgColor}
                    $borderRadius={$iconBorderRadius}
                    src={$icon}
                    $w={$iconSizeW}
                    $h={$iconSizeH}
                    $fill={$iconFill}
                    $stroke={$iconStroke}
                    $m={$iconMargin}
                    $p={$iconPadding}
                    $cursor={$cursor}
                    onClick={onClick}
                />
            )}

            {$text}

            {$iconPosition === 'right' && (
                <Icon
                    $bgColor={$iconBgColor}
                    $borderRadius={$iconBorderRadius}
                    src={$icon}
                    $w={$iconSizeW}
                    $h={$iconSizeH}
                    $fill={$iconFill}
                    $stroke={$iconStroke}
                    $m={$iconMargin}
                    $p={$iconPadding}
                    $cursor={$cursor}
                    onClick={onClick}
                />
            )}
        </Btn>
    );
};
