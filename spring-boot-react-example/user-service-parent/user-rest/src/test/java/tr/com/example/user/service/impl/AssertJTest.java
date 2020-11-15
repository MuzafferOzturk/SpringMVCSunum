package tr.com.example.user.service.impl;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class AssertJTest {

    @Test
    @DisplayName("AssertJ Test")
    public void assertJTesting(){
        List<Integer> integerList = Arrays.asList(1, 2, 3);
        assertThat(integerList)
                .hasSize(3)
                .contains(2)
                .allMatch(integer -> integer<5);
    }
}
