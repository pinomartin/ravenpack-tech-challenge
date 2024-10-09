import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { User } from '@/types/users';

interface UserCardProps {
    user: User;
    onPress: () => void;
    styles: any;
}

const UserCard: React.FC<UserCardProps> = ({ user, onPress, styles }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <View>
                <Text style={styles.title}>{user.name}</Text>
                <Text style={styles.subtitle}>{user.email}</Text>
                <Text style={styles.body}>{user.company.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default UserCard;