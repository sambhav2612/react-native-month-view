'use strict';

import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';

class Tabs extends Component {
    state: State = {};

    onSelect(el) {
        if (el.props.onSelect) {
            el.props.onSelect(el);
        } else if (this.props.onSelect) {
            this.props.onSelect(el);
        }
    }

    render() {
        const self = this;
        let selected = this.props.selected;
        if (!selected) {
            React.Children.forEach(this.props.children.filter(c => c), el => {
                if (!selected || el.props.initial) {
                    selected = el.props.name || el.key;
                }
            });
        }
        return (
            <View style={[styles.tabbarView, this.props.style]}>
                <ScrollView horizontal={true}>
                    {React.Children.map(this.props.children.filter(c => c), (el) =>
                        <TouchableOpacity key={el.props.name + "touch"}
                            testID={el.props.testID}
                            style={[styles.iconView, this.props.iconStyle, (el.props.name || el.key) === selected ? this.props.selectedIconStyle || el.props.selectedIconStyle || {} : {}]}
                            onPress={() => !self.props.locked && self.onSelect(el)}
                            onLongPress={() => self.onSelect(el)}
                            activeOpacity={el.props.pressOpacity}>
                            {selected === (el.props.name || el.key) ? React.cloneElement(el, {
                                selected: true,
                                style: [this.props.style, this.props.selectedStyle, el.props.selectedStyle]
                            }) : el}
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    tabbarView: {
        right: 0,
        left: 0,
        height: 50,
        opacity: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        opacity: 0.8,
        borderBottomWidth: 2,
        borderColor: '#10455b',
        paddingVertical: 5
    }
});

module.exports = Tabs;
